import { Component } from '@angular/core';
import { trigger, style, animate, transition, keyframes } from '@angular/animations';
import { NavController } from 'ionic-angular';
import { Subject } from "rxjs/Subject";
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { AnimationsProvider } from '../../providers/animations/animations';

export interface Animation {
  type: string,
  options: [{
    name: string
  }]
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  animations: [
    trigger('animationType', [
      transition('* => bounceIn', [
        style({
          'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
          transition: 'opacity ease-in-out',
          transform: 'scale3d(.3, .3, .3)',
          opacity: 0
        }),
        animate('600ms', keyframes([
          style({opacity: 0.4, transform: 'scale3d(1.1, 1.1, 1.1)', offset: 0.2}),
          style({opacity: 0.8, transform: 'scale3d(.9, .9, .9)', offset: 0.4}),
          style({opacity: 1, transform: 'scale3d(1.03, 1.03, 1.03)', offset: 0.6}),
          style({transform: 'scale3d(.97, .97, .97)', offset: 0.8}),
          style({transform: 'scale3d(1, 1, 1)', offset: 1.0})
        ]))
      ]),
      transition('* => bounceInUp', [
        style({
          'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
          transition: 'opacity ease-in-out',
          transform: 'translate3d(0, 3000px, 0)',
          opacity: 0
        }),
        animate('600ms', keyframes([
          style({opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.6}),
          style({transform: 'translate3d(0, 10px, 0)', offset: 0.75}),
          style({transform: 'translate3d(0, -5px, 0)', offset: 0.9}),
          style({transform: 'translate3d(0, 0, 0)', offset: 1.0})
        ]))
      ]),
      transition('* => bounceInRight', [
        style({
          'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
          transition: 'opacity ease-in-out',
          transform: 'translate3d(3000px, 0, 0)',
          opacity: 0
        }),
        animate('600ms', keyframes([
          style({opacity: 1, transform: 'translate3d(-25px, 0, 0)', offset: 0.6}),
          style({transform: 'translate3d(10px, 0, 0)', offset: 0.75}),
          style({transform: 'translate3d(-5px, 0, 0)', offset: 0.9}),
          style({transform: 'none', offset: 1.0})
        ]))
      ]),
      transition('* => bounceInDown', [
        style({
          'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
          transition: 'opacity ease-in-out',
          transform: 'translate3d(0, -3000px, 0)',
          opacity: 0
        }),
        animate('600ms', keyframes([
          style({opacity: 1, transform: 'translate3d(0, 25px, 0)', offset: 0.6}),
          style({transform: 'translate3d(0, -10px, 0)', offset: 0.75}),
          style({transform: 'translate3d(0, 5px, 0)', offset: 0.9}),
          style({transform: 'translate3d(0, 0, 0)', offset: 1.0})
        ]))
      ]),
      transition('* => bounceInLeft', [
        style({
          'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
          transition: 'opacity ease-in-out',
          transform: 'translate3d(-3000px, 0, 0)',
          opacity: 0
        }),
        animate('600ms', keyframes([
          style({opacity: 1, transform: 'translate3d(25px, 0, 0)', offset: 0.6}),
          style({transform: 'translate3d(-10px, 0, 0)', offset: 0.75}),
          style({transform: 'translate3d(5px, 0, 0)', offset: 0.9}),
          style({transform: 'none', offset: 1.0})
        ]))
      ]),
      transition('* => fadeIn', [
        style({
          transition: 'opacity ease-in-out',
          opacity: 0
        }),
        animate('600ms', style({
          transition: 'opacity ease-in-out',
          opacity: 1
        }))
      ]),
      transition('* => fadeInUp', [
        style({
          transition: 'opacity ease-in-out',
          transform: 'translate3d(0, 100%, 0)',
          opacity: 0
        }),
        animate('600ms', style({
          transition: 'opacity ease-in-out',
          transform: 'none',
          opacity: 1
        }))
      ]),
      transition('* => fadeInUpBig', [
        style({
          transition: 'opacity ease-in-out',
          transform: 'translate3d(0, 2000px, 0)',
          opacity: 0
        }),
        animate('600ms', style({
          transition: 'opacity ease-in-out',
          transform: 'none',
          opacity: 1
        }))
      ]),
      transition('* => fadeInRight', [
        style({
          transition: 'opacity ease-in-out',
          transform: 'translate3d(100%, 0, 0)',
          opacity: 0
        }),
        animate('600ms', style({
          transition: 'opacity ease-in-out',
          transform: 'none',
          opacity: 1
        }))
      ]),
      transition('* => fadeInRightBig', [
        style({
          transition: 'opacity ease-in-out',
          transform: 'translate3d(2000px, 0, 0)',
          opacity: 0
        }),
        animate('600ms', style({
          transition: 'opacity ease-in-out',
          transform: 'none',
          opacity: 1
        }))
      ]),
      transition('* => fadeInDown', [
        style({
          transition: 'opacity ease-in-out',
          transform: 'translate3d(0, -100%, 0)',
          opacity: 0
        }),
        animate('600ms', style({
          transition: 'opacity ease-in-out',
          transform: 'none',
          opacity: 1
        }))
      ]),
      transition('* => fadeInDownBig', [
        style({
          transition: 'opacity ease-in-out',
          transform: 'translate3d(0, -2000px, 0)',
          opacity: 0
        }),
        animate('600ms', style({
          transition: 'opacity ease-in-out',
          transform: 'none',
          opacity: 1
        }))
      ]),
      transition('* => fadeInLeft', [
        style({
          transition: 'opacity ease-in-out',
          transform: 'translate3d(-100%, 0, 0)',
          opacity: 0
        }),
        animate('600ms', style({
          transition: 'opacity ease-in-out',
          transform: 'none',
          opacity: 1
        }))
      ]),
      transition('* => fadeInLeftBig', [
        style({
          transition: 'opacity ease-in-out',
          transform: 'translate3d(-2000px, 0, 0)',
          opacity: 0
        }),
        animate('600ms', style({
          transition: 'opacity ease-in-out',
          transform: 'none',
          opacity: 1
        }))
      ]),
      transition('* => flip', [
        style({
          transform: 'perspective(400px) rotate3d(0, 1, 0, -360deg)',
          'animation-timing-function': 'ease-out'
        }),
        animate('600ms', keyframes([
          style({transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg)',
                 'animation-timing-function': 'ease-out', offset: 0.4}),
          style({transform: 'perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg)',
                 'animation-timing-function': 'ease-out', offset: 0.5}),
          style({transform: 'perspective(400px) scale3d(.95, .95, .95)',
                 'animation-timing-function': 'ease-out', offset: 0.8}),
          style({transform: 'perspective(400px)', offset: 1.0})
        ]))
      ]),
      transition('* => flipInX', [
        style({
          transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)',
          'animation-timing-function': 'ease-out',
          opacity: 0
        }),
        animate('600ms', keyframes([
          style({transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)',
                 'animation-timing-function': 'ease-out', offset: 0.4}),
          style({transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: 1, offset: 0.6}),
          style({transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)', offset: 0.8}),
          style({transform: 'perspective(400px)', offset: 1.0})
        ]))
      ]),
      transition('* => flipInY', [
        style({
          transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)',
          'animation-timing-function': 'ease-out',
          opacity: 0
        }),
        animate('600ms', keyframes([
          style({transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)',
                 'animation-timing-function': 'ease-out', offset: 0.4}),
          style({transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: 1, offset: 0.6}),
          style({transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)', offset: 0.8}),
          style({transform: 'perspective(400px)', offset: 1.0})
        ]))
      ]),
      transition('* => flipOutX', [
        style({
          transform: 'perspective(400px)',
          opacity: 1
        }),
        animate('600ms', keyframes([
          style({transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', opacity: 1, offset: 0.3}),
          style({transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: 0, offset: 1.0})
        ]))
      ]),
      transition('* => flipOutY', [
        style({
          transform: 'perspective(400px)',
          opacity: 1
        }),
        animate('600ms', keyframes([
          style({transform: 'perspective(400px) rotate3d(0, 1, 0, -15deg)', opacity: 1, offset: 0.3}),
          style({transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: 0, offset: 1.0})
        ]))
      ]),
      transition('* => lightSpeedIn', [
        style({
          transform: 'translate3d(100%, 0, 0) skewX(-30deg)',
          opacity: 0
        }),
        animate('1000ms', keyframes([
          style({transform: 'skewX(20deg)', opacity: 1, offset: 0.6}),
          style({transform: 'skewX(-5deg)', offset: 0.8}),
          style({transform: 'none', offset: 1.0})
        ]))
      ]),
      transition('* => lightSpeedOut', [
        style({
          opacity: 1
        }),
        animate('1000ms', style({
          'animation-timing-function': 'ease-in',
          transform: 'translate3d(100%, 0, 0) skewX(30deg)',
          opacity: 0
        }))
      ]),
      transition('* => rotateIn', [
        style({
          'transform-origin': 'center',
          transform: 'rotate3d(0, 0, 1, -200deg)',
          opacity: 0
        }),
        animate('600ms', style({
          'transform-origin': 'center',
          transform: 'none',
          opacity: 1
        }))
      ]),
      transition('* => rotateInDownLeft', [
        style({
          'transform-origin': 'left bottom',
          transform: 'rotate3d(0, 0, 1, -45deg)',
          opacity: 0
        }),
        animate('600ms', style({
          'transform-origin': 'left bottom',
          transform: 'none',
          opacity: 1
        }))
      ]),
      transition('* => rotateInDownRight', [
        style({
          'transform-origin': 'right bottom',
          transform: 'rotate3d(0, 0, 1, 45deg)',
          opacity: 0
        }),
        animate('600ms', style({
          'transform-origin': 'right bottom',
          transform: 'none',
          opacity: 1
        }))
      ]),
      transition('* => rotateInUpLeft', [
        style({
          'transform-origin': 'left bottom',
          transform: 'rotate3d(0, 0, 1, 45deg)',
          opacity: 0
        }),
        animate('600ms', style({
          'transform-origin': 'left bottom',
          transform: 'none',
          opacity: 1
        }))
      ]),
      transition('* => rotateInUpRight', [
        style({
          'transform-origin': 'right bottom',
          transform: 'rotate3d(0, 0, 1, -90deg)',
          opacity: 0
        }),
        animate('600ms', style({
          'transform-origin': 'right bottom',
          transform: 'none',
          opacity: 1
        }))
      ]),
      transition('* => rotateOut', [
        style({
          'transform-origin': 'center',
          opacity: 1
        }),
        animate('600ms', style({
          'transform-origin': 'center',
          transform: 'rotate3d(0, 0, 1, 200deg)',
          opacity: 0
        }))
      ]),
      transition('* => rotateOutDownLeft', [
        style({
          'transform-origin': 'left bottom',
          opacity: 1
        }),
        animate('600ms', style({
          'transform-origin': 'left bottom',
          transform: 'rotate3d(0, 0, 1, 45deg)',
          opacity: 0
        }))
      ]),
      transition('* => rotateOutDownRight', [
        style({
          'transform-origin': 'right bottom',
          opacity: 1
        }),
        animate('600ms', style({
          'transform-origin': 'right bottom',
          transform: 'rotate3d(0, 0, 1, -45deg)',
          opacity: 0
        }))
      ]),
      transition('* => rotateOutUpLeft', [
        style({
          'transform-origin': 'left bottom',
          opacity: 1
        }),
        animate('600ms', style({
          'transform-origin': 'left bottom',
          transform: 'rotate3d(0, 0, 1, -45deg)',
          opacity: 0
        }))
      ]),
      transition('* => rotateOutUpRight', [
        style({
          'transform-origin': 'right bottom',
          opacity: 1
        }),
        animate('600ms', style({
          'transform-origin': 'right bottom',
          transform: 'rotate3d(0, 0, 1, 90deg)',
          opacity: 0
        }))
      ]),
      transition('* => slideInUp', [
        style({
          transform: 'translate3d(0, 100%, 0)',
          visibility: 'visible'
        }),
        animate('600ms', style({
          transform: 'translate3d(0, 0, 0)'
        }))
      ]),
      transition('* => slideInDown', [
        style({
          transform: 'translate3d(0, -100%, 0)',
          visibility: 'visible'
        }),
        animate('600ms', style({
          transform: 'translate3d(0, 0, 0)'
        }))
      ]),
      transition('* => slideInLeft', [
        style({
          transform: 'translate3d(-100%, 0, 0)',
          visibility: 'visible'
        }),
        animate('600ms', style({
          transform: 'translate3d(0, 0, 0)'
        }))
      ]),
      transition('* => slideInRight', [
        style({
          transform: 'translate3d(100, 0, 0)',
          visibility: 'visible'
        }),
        animate('600ms', style({
          transform: 'translate3d(0, 0, 0)'
        }))
      ]),
      transition('* => slideOutUp', [
        style({
          transform: 'translate3d(0, 0, 0)'
        }),
        animate('600ms', style({
          visibility: 'hidden',
          transform: 'translate3d(0, -100%, 0)'
        }))
      ]),
      transition('* => slideOutDown', [
        style({
          transform: 'translate3d(0, 0, 0)'
        }),
        animate('600ms', style({
          visibility: 'hidden',
          transform: 'translate3d(0, 100%, 0)'
        }))
      ]),
      transition('* => slideOutLeft', [
        style({
          transform: 'translate3d(0, 0, 0)'
        }),
        animate('600ms', style({
          visibility: 'hidden',
          transform: 'translate3d(-100%, 0, 0)'
        }))
      ]),
      transition('* => slideOutRight', [
        style({
          transform: 'translate3d(0, 0, 0)'
        }),
        animate('600ms', style({
          visibility: 'hidden',
          transform: 'translate3d(100%, 0, 0)'
        }))
      ])
    ])
  ]
})
export class HomePage {
  public animation: string = 'bounceIn';

  /** selected animation type */
  private _animationType: Subject<string> = new BehaviorSubject<string>(null);
  public animationType: Subject<string> = this._animationType;

  /** animations object of possible animations to loop through */
  public animations: Array<Animation>;

  constructor(public navCtrl: NavController, private animationsProvider: AnimationsProvider) {
    // default select value to animate
    this._animationType.next('bounceIn');
  }

  ionViewDidEnter() {
    /** retrive list of possible animations */
    this._getAnimations();
  }

  /** get list of animations from data.json */
  private _getAnimations() {
    this.animationsProvider.getAnimations()
      .then(data => {
        /** set animations to the response */
        this.animations = data;
      });
  }

  public doAnimate(animationType: string) {
    this._animationType.next('');

    setTimeout(() => {
      this._animationType.next(animationType);
    }, 300);
  }

public bounceIn = `
import { trigger, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  animations: [
    trigger("animationName", [
      transition("* => bounceIn", [
        style({
          "animation-timing-function": "cubic-bezier(0.215, 0.610, 0.355, 1.000)",
          transition: "opacity ease-in-out",
          transform: "scale3d(.3, .3, .3)",
          opacity: 0
        }),
        animate("600ms", keyframes([
          style({opacity: 0.4, transform: "scale3d(1.1, 1.1, 1.1)", offset: 0.2}),
          style({opacity: 0.8, transform: "scale3d(.9, .9, .9)", offset: 0.4}),
          style({opacity: 1, transform: "scale3d(1.03, 1.03, 1.03)", offset: 0.6}),
          style({transform: "scale3d(.97, .97, .97)", offset: 0.8}),
          style({transform: "scale3d(1, 1, 1)", offset: 1.0})
        ]))
      ])
    ]);
  ]
})

export class HomePage {
  public animationName: string;
}
`

public bounceInUp = `
import { trigger, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  animations: [
    trigger("animationName", [
      transition('* => bounceInUp', [
        style({
          'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
          transition: 'opacity ease-in-out',
          transform: 'translate3d(0, 3000px, 0)',
          opacity: 0
        }),
        animate('600ms', keyframes([
          style({opacity: 1, transform: 'translate3d(0, -20px, 0)', offset: 0.6}),
          style({transform: 'translate3d(0, 10px, 0)', offset: 0.75}),
          style({transform: 'translate3d(0, -5px, 0)', offset: 0.9}),
          style({transform: 'translate3d(0, 0, 0)', offset: 1.0})
        ]))
      ])
    ]);
  ]
})

export class HomePage {
  public animationName: string;
}
`

public bounceInRight = `
import { trigger, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  animations: [
    trigger("animationName", [
      transition('* => bounceInRight', [
        style({
          'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
          transition: 'opacity ease-in-out',
          transform: 'translate3d(3000px, 0, 0)',
          opacity: 0
        }),
        animate('600ms', keyframes([
          style({opacity: 1, transform: 'translate3d(-25px, 0, 0)', offset: 0.6}),
          style({transform: 'translate3d(10px, 0, 0)', offset: 0.75}),
          style({transform: 'translate3d(-5px, 0, 0)', offset: 0.9}),
          style({transform: 'none', offset: 1.0})
        ]))
      ])
    ]);
  ]
})

export class HomePage {
  public animationName: string;
}
`

public bounceInDown = `
import { trigger, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  animations: [
    trigger("animationName", [
      transition('* => bounceInDown', [
        style({
          'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
          transition: 'opacity ease-in-out',
          transform: 'translate3d(0, -3000px, 0)',
          opacity: 0
        }),
        animate('600ms', keyframes([
          style({opacity: 1, transform: 'translate3d(0, 25px, 0)', offset: 0.6}),
          style({transform: 'translate3d(0, -10px, 0)', offset: 0.75}),
          style({transform: 'translate3d(0, 5px, 0)', offset: 0.9}),
          style({transform: 'translate3d(0, 0, 0)', offset: 1.0})
        ]))
      ])
    ]);
  ]
})

export class HomePage {
  public animationName: string;
}
`

public bounceInLeft = `
import { trigger, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  animations: [
    trigger("animationName", [
      transition('* => bounceInLeft', [
        style({
          'animation-timing-function': 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
          transition: 'opacity ease-in-out',
          transform: 'translate3d(-3000px, 0, 0)',
          opacity: 0
        }),
        animate('600ms', keyframes([
          style({opacity: 1, transform: 'translate3d(25px, 0, 0)', offset: 0.6}),
          style({transform: 'translate3d(-10px, 0, 0)', offset: 0.75}),
          style({transform: 'translate3d(5px, 0, 0)', offset: 0.9}),
          style({transform: 'none', offset: 1.0})
        ]))
      ])
    ]);
  ]
})

export class HomePage {
  public animationName: string;
}
`

public fadeIn = `
import { trigger, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  animations: [
    trigger("animationName", [
      transition('* => fadeIn', [
        style({
          transition: 'opacity ease-in-out',
          opacity: 0
        }),
        animate('600ms', style({
          transition: 'opacity ease-in-out',
          opacity: 1
        }))
      ])
    ]);
  ]
})

export class HomePage {
  public animationName: string;
}
`

public fadeInUp = `
import { trigger, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  animations: [
    trigger("animationName", [
      transition('* => fadeInUp', [
        style({
          transition: 'opacity ease-in-out',
          transform: 'translate3d(0, 100%, 0)',
          opacity: 0
        }),
        animate('600ms', style({
          transition: 'opacity ease-in-out',
          transform: 'none',
          opacity: 1
        }))
      ])
    ]);
  ]
})

export class HomePage {
  public animationName: string;
}
`

public fadeInUpBig = `
import { trigger, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  animations: [
    trigger("animationName", [
      transition('* => fadeInUpBig', [
        style({
          transition: 'opacity ease-in-out',
          transform: 'translate3d(0, 2000px, 0)',
          opacity: 0
        }),
        animate('600ms', style({
          transition: 'opacity ease-in-out',
          transform: 'none',
          opacity: 1
        }))
      ]),
    ]);
  ]
})

export class HomePage {
  public animationName: string;
}
`

public fadeInRight = `
import { trigger, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  animations: [
    transition('* => fadeInRight', [
        style({
          transition: 'opacity ease-in-out',
          transform: 'translate3d(100%, 0, 0)',
          opacity: 0
        }),
        animate('600ms', style({
          transition: 'opacity ease-in-out',
          transform: 'none',
          opacity: 1
        }))
      ])
    ]);
  ]
})

export class HomePage {
  public animationName: string;
}
`

public fadeInRightBig = `
import { trigger, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  animations: [
    transition('* => fadeInRightBig', [
        style({
          transition: 'opacity ease-in-out',
          transform: 'translate3d(2000px, 0, 0)',
          opacity: 0
        }),
        animate('600ms', style({
          transition: 'opacity ease-in-out',
          transform: 'none',
          opacity: 1
        }))
      ])
    ]);
  ]
})

export class HomePage {
  public animationName: string;
}
`

public fadeInDown = `
import { trigger, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  animations: [
    transition('* => fadeInDown', [
      style({
        transition: 'opacity ease-in-out',
        transform: 'translate3d(0, -100%, 0)',
        opacity: 0
      }),
      animate('600ms', style({
        transition: 'opacity ease-in-out',
        transform: 'none',
        opacity: 1
      }))
    ])
  ]
})

export class HomePage {
  public animationName: string;
}
`

public fadeInDownBig = `
import { trigger, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  animations: [
    transition('* => fadeInDownBig', [
      style({
        transition: 'opacity ease-in-out',
        transform: 'translate3d(0, -2000px, 0)',
        opacity: 0
      }),
      animate('600ms', style({
        transition: 'opacity ease-in-out',
        transform: 'none',
        opacity: 1
      }))
    ])
  ]
})

export class HomePage {
  public animationName: string;
}
`

public fadeInLeft = `
import { trigger, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  animations: [
    transition('* => fadeInLeft', [
      style({
        transition: 'opacity ease-in-out',
        transform: 'translate3d(-100%, 0, 0)',
        opacity: 0
      }),
      animate('600ms', style({
        transition: 'opacity ease-in-out',
        transform: 'none',
        opacity: 1
      }))
    ]),
  ]
})

export class HomePage {
  public animationName: string;
}
`

public fadeInLeftBig = `
import { trigger, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: "page-home",
  templateUrl: "home.html",
  animations: [
    transition('* => fadeInLeftBig', [
      style({
        transition: 'opacity ease-in-out',
        transform: 'translate3d(-2000px, 0, 0)',
        opacity: 0
      }),
      animate('600ms', style({
        transition: 'opacity ease-in-out',
        transform: 'none',
        opacity: 1
      }))
    ])
  ]
})

export class HomePage {
  public animationName: string;
}
`

}
