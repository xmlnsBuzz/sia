// Ignore this - this is collapsible.
import Link from 'next/link';


class Collapsible extends React.Component {
  constructor ( props ) {
    super( props )

    // Bind class methods
    this.handleTriggerClick = this.handleTriggerClick.bind( this );
    this.handleTransitionEnd = this.handleTransitionEnd.bind( this );
    this.continueOpenCollapsible = this.continueOpenCollapsible.bind( this );

    // Defaults the dropdown to be closed
    if ( props.open ) {
      this.state = {
        isClosed: false,
        shouldSwitchAutoOnNextCycle: false,
        height: 'auto',
        transition: 'none',
        hasBeenOpened: true,
        overflow: props.overflowWhenOpen,
        inTransition: false,
      }
    } else {
      this.state = {
        isClosed: true,
        shouldSwitchAutoOnNextCycle: false,
        height: 0,
        transition: `height ${props.transitionTime}ms ${props.easing}`,
        hasBeenOpened: false,
        overflow: 'hidden',
        inTransition: false,
      }
    }
  }

  componentDidUpdate ( prevProps, prevState ) {
    if ( this.state.shouldOpenOnNextCycle ) {
      this.continueOpenCollapsible();
    }

    if ( prevState.height === 'auto' && this.state.shouldSwitchAutoOnNextCycle === true ) {
      window.setTimeout( () => { // Set small timeout to ensure a true re-render
        this.setState( {
          height: 0,
          overflow: 'hidden',
          isClosed: true,
          shouldSwitchAutoOnNextCycle: false,
        } );
      }, 50 );
    }

    // If there has been a change in the open prop (controlled by accordion)
    if ( prevProps.open !== this.props.open ) {
      if ( this.props.open === true ) {
        this.openCollapsible();
        this.props.onOpening();
      } else {
        this.closeCollapsible();
        this.props.onClosing();
      }
    }
  }

  closeCollapsible () {
    this.setState( {
      shouldSwitchAutoOnNextCycle: true,
      height: this.refs.inner.offsetHeight,
      transition: `height ${this.props.transitionCloseTime ?
        this.props.transitionCloseTime : this.props.transitionTime}ms ${this.props.easing}`,
      inTransition: true,
    } );
  }

  openCollapsible () {
    this.setState( {
      inTransition: true,
      shouldOpenOnNextCycle: true,
    } );
  }

  continueOpenCollapsible () {
    this.setState( {
      height: this.refs.inner.offsetHeight,
      transition: `height ${this.props.transitionTime}ms ${this.props.easing}`,
      isClosed: false,
      hasBeenOpened: true,
      inTransition: true,
      shouldOpenOnNextCycle: false,
    } );
  }

  handleTriggerClick ( event ) {
    event.preventDefault();

    if ( this.props.triggerDisabled ) {
      return
    }

    if ( this.props.handleTriggerClick ) {
      this.props.handleTriggerClick( this.props.accordionPosition );
    } else {
      if ( this.state.isClosed === true ) {
        this.openCollapsible();
        this.props.onOpening();
      } else {
        this.closeCollapsible();
        this.props.onClosing();
      }
    }
  }

  renderNonClickableTriggerElement () {
    if ( this.props.triggerSibling && typeof this.props.triggerSibling === 'string' ) {
      return (
        <span className={`${this.props.classParentString}__trigger-sibling`}>{this.props.triggerSibling}</span>
      )
    } else if ( this.props.triggerSibling ) {
      return <this.props.triggerSibling />
    }

    return null;
  }

  handleTransitionEnd () {
    // Switch to height auto to make the container responsive
    if ( !this.state.isClosed ) {
      this.setState( { height: 'auto', overflow: this.props.overflowWhenOpen, inTransition: false } );
      this.props.onOpen();
    } else {
      this.setState( { inTransition: false } );
      this.props.onClose();
    }
  }

  render () {
    var dropdownStyle = {
      height: this.state.height,
      WebkitTransition: this.state.transition,
      msTransition: this.state.transition,
      transition: this.state.transition,
      overflow: this.state.overflow,
    }

    var openClass = this.state.isClosed ? 'is-closed' : 'is-open';
    var disabledClass = this.props.triggerDisabled ? 'is-disabled' : '';

    //If user wants different text when tray is open
    var trigger = ( this.state.isClosed === false ) && ( this.props.triggerWhenOpen !== undefined )
      ? this.props.triggerWhenOpen
      : this.props.trigger;

    // If user wants a trigger wrapping element different than 'span'
    const TriggerElement = this.props.triggerTagName;

    // Don't render children until the first opening of the Collapsible if lazy rendering is enabled
    var children = this.props.lazyRender
      && !this.state.hasBeenOpened
      && this.state.isClosed
      && !this.state.inTransition ? null : this.props.children;

    // Construct CSS classes strings
    const triggerClassString = `${this.props.classParentString}__trigger ${openClass} ${disabledClass} ${
      this.state.isClosed ? this.props.triggerClassName : this.props.triggerOpenedClassName
      }`;
    const parentClassString = `${this.props.classParentString} ${
      this.state.isClosed ? this.props.className : this.props.openedClassName
      }`;
    const outerClassString = `${this.props.classParentString}__contentOuter ${this.props.contentOuterClassName}`;
    const innerClassString = `${this.props.classParentString}__contentInner ${this.props.contentInnerClassName}`;

    return (
      <div className={parentClassString.trim()}>
        <TriggerElement
          className={triggerClassString.trim()}
          onClick={this.handleTriggerClick}
          style={this.props.triggerStyle && this.props.triggerStyle}
          onKeyPress={( event ) => {
            const { key } = event;
            if ( key === ' ' || key === 'Enter' ) {
              this.handleTriggerClick( event );
            }
          }}
          tabIndex={this.props.tabIndex && this.props.tabIndex}
        >
          {trigger}
        </TriggerElement>

        {this.renderNonClickableTriggerElement()}

        <div
          className={outerClassString.trim()}
          ref="outer"
          style={dropdownStyle}
          onTransitionEnd={this.handleTransitionEnd}
        >
          <div
            className={innerClassString.trim()}
            ref="inner"
          >
            {children}
          </div>
        </div>
      </div>
    );
  }
}

Collapsible.defaultProps = {
  transitionTime: 200,
  transitionCloseTime: null,
  triggerTagName: 'span',
  easing: 'linear',
  open: false,
  classParentString: 'Collapsible',
  triggerDisabled: false,
  lazyRender: false,
  overflowWhenOpen: 'hidden',
  openedClassName: '',
  triggerStyle: null,
  triggerClassName: '',
  triggerOpenedClassName: '',
  contentOuterClassName: '',
  contentInnerClassName: '',
  className: '',
  triggerSibling: null,
  onOpen: () => { },
  onClose: () => { },
  onOpening: () => { },
  onClosing: () => { },
  tabIndex: null,
};

/* 
Properties (Options)
contentContainerTagName | string | default: div
Tag Name for the Collapsible Root Element.

containerElementProps | object
Pass props (or attributes) to the top div element. Useful for inserting id.

trigger | string or React Element | required
The text or element to appear in the trigger link.

triggerTagName | string | default: span
The tag name of the element wrapping the trigger text or element.

triggerStyle | object | default: null
Adds a style attribute to the trigger.

triggerWhenOpen | string or React Element
Optional trigger text or element to change to when the Collapsible is open.

triggerDisabled | boolean | default: false
Disables the trigger handler if true. Note: this has no effect other than applying the .is-disabled CSS class if you've provided a handleTriggerClick prop.

triggerElementProps | object
Pass props (or attributes) to the trigger wrapping element. Useful for inserting role when using tabIndex.

transitionTime | number | default: 400
The number of milliseconds for the open/close transition to take.

transitionCloseTime | number | default: null
The number of milliseconds for the close transition to take.

easing | string | default: 'linear'
The CSS easing method you wish to apply to the open/close transition. This string can be any valid value of CSS transition-timing-function. For reference view the MDN documentation.

open | bool | default: false
Set to true if you want the Collapsible to begin in the open state. You can also use this prop to manage the state from a parent component.

accordionPosition | string
Unique key used to identify the Collapse instance when used in an accordion.

handleTriggerClick | function
Define this to override the click handler for the trigger link. Takes one parameter, which is props.accordionPosition.

onOpen | function
Is called when the Collapsible has opened.

onClose | function
Is called when the Collapsible has closed.

onOpening | function
Is called when the Collapsible is opening.

onClosing | function
Is called when the Collapsible is closing.

lazyRender | bool | default: false
Set this to true to postpone rendering of all of the content of the Collapsible until before it's opened for the first time

overflowWhenOpen | enum | default: 'hidden'
The CSS overflow property once the Collapsible is open. This can be any one of the valid CSS values of 'hidden', 'visible', 'auto', 'scroll', 'inherit', 'initial', or 'unset'

triggerSibling | element | default: null
Escape hatch to add arbitrary content on the trigger without triggering expand/collapse. It's up to you to style it as needed. This is inserted in component tree and DOM directly after .Collapsible__trigger

tabIndex | number | default: null
A tabIndex prop adds the tabIndex attribute to the trigger element which in turn allows the Collapsible trigger to gain focus.

CSS Class String Props
classParentString | string | default: Collapsible
Use this to overwrite the parent CSS class for the Collapsible component parts. Read more in the CSS section below.

className | string
.Collapsible element (root) when closed

openedClassName | string
.Collapsible element (root) when open

triggerClassName | string
.Collapsible__trigger element (root) when closed

triggerOpenedClassName | string
.Collapsible__trigger element (root) when open

contentOuterClassName | string
.Collapsible__contentOuter element

contentInnerClassName | string
.Collapsible__contentInner element

CSS Styles
In theory you don't need any CSS to get this to work, but let's face it, it'd be pretty rubbish without it.

By default the parent CSS class name is .Collapsible but this can be changed by setting the classParentString property on the component.

The CSS class names follow a type of BEM pattern of CSS naming. Below is a list of the CSS classes available on the component.

.Collapsible
The parent element for the components.

.Collapsible__trigger
The trigger link that controls the opening and closing of the component. The state of the component is also reflected on this element with the modifier classes;

is-closed | Closed state
is-open | Open setState
is-disabled | Trigger is disabled
.Collapsible__contentOuter
The outer container that hides the content. This is set to overflow: hidden within the javascript but everything else about it is for you to change.

.Collapsible__contentInner
This is a container for the content passed into the component. This keeps everything nice and neat and allows the component to do all it's whizzy calculations.

If you're using a CSS framework such as Foundation or Bootstrap, you probably want to use their classes instead of styling .Collapsible. See Properties above.
*/


class Menu extends React.Component {
  render () {
    return (
      <nav>
        <div className="Coll-container">
          
          <Collapsible trigger={'Hello'}>
            <p>World</p>
          </Collapsible>
          <Collapsible trigger={'Hello'}>
            <p>World</p>
          </Collapsible>
          <Collapsible trigger={'Hello'}>
            <p>World</p>
            <Collapsible trigger={'Hello'}>
              <Link href="/"><a>World</a></Link>
              <Link href="/css/font/Fonts"><a>CSS</a></Link>
            </Collapsible>
          </Collapsible>
          <Collapsible trigger={'Hello'}>
            <p>World</p>
          </Collapsible>
        </div>
      </nav>
    );
  }
}

export default Menu;