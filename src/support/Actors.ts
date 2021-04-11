
import { Actor, Cast } from '@serenity-js/core';
import { BrowseTheWeb } from '@serenity-js/protractor';
import { protractor } from 'protractor';

export class Actors implements Cast {
    prepare(actor: Actor): Actor {              // `prepare(actor: Actor)` instead of `actor(name: string)`
        return actor.whoCan(                    // add the abilities instead of instantiating the actor
            BrowseTheWeb.using(protractor.browser),
        );
    }
}