//Template for making events - the key is the destination passage you are traveling to.

App.Data.Events["Cabin"] = [
    {
        ID: 'CrewRape', // A unique ID for the event.
        FROM: 'Sleep', // The passage you are traversing from
        MAX_REPEAT: 0, // Number of times the event can repeat, 0 means forever.
        MIN_DAY: 5, // Minimum day the event shows up on
        MAX_DAY: 0, // Maximum day the event shows up on, 0 means forever
        COOL: 3, // Interval between repeats on this event.
        PHASE: [ 0 ], // Time phases the event is valid for
        PASSAGE: 'CrewRapeEvent', // Override passage that the player is routed to.
        CHECK: function(p) { // Condition function that is called to check if the event fires.
            return ((p.GetNPC("Crew").Mood() < 40) && (Math.floor(Math.random() * 4) == 0));
        }
    },
    {
        ID: 'PenisShrink',
        FROM: 'Sleep',
        MAX_REPEAT: 1,
        MIN_DAY: 1,
        MAX_DAY: 0,
        COOL: 0,
        PHASE: [ 0 ],
        PASSAGE: 'PenisShrinkEvent',
        CHECK: function(p) {
            return (p.GetStat("BODY", "Penis") <= 34 && p.GetStat("BODY", "Balls") <= 34);
        }
    },
    {
        ID: 'KrakenAttack',
        FROM: 'Sleep',
        MAX_REPEAT: 0,
        MIN_DAY: 20,
        MAX_DAY: 0,
        COOL: 10,
        PHASE: [ 0 ],
        PASSAGE: 'KrakenAttackEvent',
        CHECK: function(p) { 
            return (Math.floor(Math.random() * 5) == 0);
        }  
    },
    {
        ID: 'PirateAttack',
        FROM: 'Sleep',
        MAX_REPEAT: 0,
        MIN_DAY: 25,
        MAX_DAY: 0,
        COOL: 15,
        PHASE: [ 0 ],
        PASSAGE: 'PirateAttackEvent',
        CHECK: function(p) { 
            return (Math.floor(Math.random() * 5) == 0);
        }  
    },
    {
        ID: 'StarvationEvent',
        FROM: 'Sleep',
        FORCE: true,
        MAX_REPEAT: 1,
        MIN_DAY: 1,
        MAX_DAY: 30,
        COOL: 0,
        PHASE: [ 0 ],
        PASSAGE: 'StarvationEvent',
        CHECK: function(p) { 
            return (p.GetStat('STAT', 'Nutrition') <= 20);
        }  
    },
    {
        ID: 'ToxicityEvent',
        FROM: 'Sleep',
        FORCE: true,
        MAX_REPEAT: 1,
        MIN_DAY: 1,
        MAX_DAY: 30,
        COOL: 0,
        PHASE: [ 0 ],
        PASSAGE: 'ToxicityEvent',
        CHECK: function(p) { 
            return (p.GetStat('STAT', 'Toxicity') >= 100);
        }  
    }

];

App.Data.Events["Deck"]= [
    {
        ID: 'CoffinDiceIntroduction',
        FROM: 'Any',
        MAX_REPEAT: 1,
        MIN_DAY: 20,
        MAX_DAY: 0,
        COOL: 0,
        PHASE: [ 2, 3],
        PASSAGE: 'CoffinDiceEvent',
        CHECK: function(p) {
           return ( 
                    (   (p.GetStat('SKILL', 'HandJobs') >= 20) ||
                        (p.GetStat('SKILL', 'BlowJobs') >= 20) ||
                        (p.GetStat('SKILL', 'TitFucking') >= 20) ||
                        (p.GetStat('SKILL', 'AssFucking') >= 20) ) && 
                        (Math.floor(Math.random() * 4) == 0) );
        }
    },
    {
        ID: 'FightClubIntroduction',
        FROM: 'Any',
        MAX_REPEAT: 1,
        MIN_DAY: 20,
        MAX_DAY: 0,
        COOL: 0,
        PHASE: [ 2, 3],
        PASSAGE: 'FightClubEvent',
        CHECK: function(p) {
           return (Math.floor(Math.random() * 4) == 0);
        }
    },
    {
        ID: 'SirenAttack',
        FROM: 'Any',
        MAX_REPEAT: 0,
        MIN_DAY: 40,
        MAX_DAY: 0,
        COOL: 20,
        PHASE: [ 3],
        PASSAGE: 'SirenAttackEvent',
        CHECK: function(p) {
            return (Math.floor(Math.random() * 5) == 0);
        }
    },
    {
        ID: 'KiplerSpar',
        FROM: 'Any',
        MAX_REPEAT: 1,
        MIN_DAY: 10,
        MAX_DAY: 0,
        COOL: 3,
        PHASE: [ 2 ],
        PASSAGE: 'KiplerSparEvent',
        CHECK: function(p) {
            return (
            (p.GetStat('SKILL', 'Swashbuckling') >= 20) &&
            (Math.floor(Math.random() * 4) == 0)
            );
        }
    }
];
