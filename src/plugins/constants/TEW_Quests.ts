// $PluginCompiler TEW_Constants.js

import TEW from "../_types/tew";

// $StartCompilation

// #region ====== QUESTS === //
TEW.DATABASE.QUESTS = [{
        gameVariableId: 52,
        icon: TEW.DATABASE.ICONS.SET.EMPIRE_CROSS,
        title: "Every good story starts with an inn",
        paragraphs: [{
            content: "On their way to Altdorf to find a well paid job, the group is caught up by nightfall and must find a place to stay for the night."
        }],
        steps: [{
            title: "A nice place to sleep",
            paragraphs: [{
                content: "The Reikland is full of coaching inns, maybe one is nearby."
            }, {
                content: "Speak to each customer in the barroom."
            }]
        }, {
            title: "The Coach and Horses",
            paragraphs: [{
                content: "While Gustav is preparing food and drinks, the group meets the other clients. Maybe one could bring them to their destination."
            }, {
                content: "Speak to each customer in the barroom."
            }]
        }, {
            title: "A good night sleep",
            paragraphs: [{
                content: "Now that the transport for Altdorf is assured, the group can go to sleep."
            }, {
                content: "Go to sleep."
            }]
        }, {
            title: "Rise and Shine !",
            paragraphs: [{
                content: "The coachmen are nowhere to be seen, it might be a good idea to wake them up."
            }, {
                content: "Find the coachmen and wake them up."
            }]
        }, {
            title: "The journey begins",
            paragraphs: [{
                content: "Everyone is ready, it is time to leave."
            }, {
                content: "Get on the coach and leave to Altdorf."
            }]
        }]
    }, {
        gameVariableId: 53,
        title: "Wanted : Bold Adventurers",
        paragraphs: [{
            content: "The group found an interesting job offer."
        }],
        steps: [{
            title: "What does it say ?",
            paragraphs: [{
                content: "On the wall of the Coach and Horses, the group found a wanted poster for bold adventurers."
            }, {
                content: "Read the poster."
            }]
        }, {
            title: "Who is that ?",
            paragraphs: [{
                content: "The wanted poster was emmited by the Crown Prince of Ostland Hergard von Tasseninck. He needs a group of skilled adventurers to form an expedition to the Grey Mountains."
            }, {
                content: "Ask the bartender about the Crown Prince of Ostland."
            }]
        }, {
            title: "Let's apply !",
            paragraphs: [{
                content: "The job offer seems legitimate, the group is heading to Altdorf to meet with their backer."
            }, {
                content: "Meet the Crown Prince in Altdorf."
            }]
        }]
    }, {
        gameVariableId: 54,
        title: "The Coachmen",
        paragraphs: [{
            content: "Two coachmen are drinking."
        }, {
            content: "Speak to the coachmen"
        }],
        steps: [{
            title: "Drunk drivers",
            paragraphs: [{
                content: "The coachmen are heading to Altdorf. The group needs to find money to buy tickets."
            }, {
                content: "Find enough money to get on the next coach and buy these seats."
            }]
        }]
    }, {
        gameVariableId: 55,
        title: "The Noblewoman",
        paragraphs: [{
            content: "A Noblewoman is dining with her entourage."
        }, {
            content: "Speak to the Noblewoman."
        }],
        steps: []
    }, {
        gameVariableId: 56,
        title: "The Apprentice",
        paragraphs: [{
            content: "A young man is reading a book."
        }, {
            content: "Speak to the young man."
        }],
        steps: []
    }, {
        gameVariableId: 57,
        title: "The Gambler",
        paragraphs: [{
            content: "A well dressed and good-looking man drinks at the bar."
        }, {
            content: "Speak to the man."
        }],
        steps: [{
            title: "A game of chance",
            paragraphs: [{
                content: "Phillipe Descartes suggests a game of Red Empress to the group. It might be a good way to earn some money."
            }, {
                content: "Beat Phillipe at his own game."
            }],
        }, {
            paragraphs: [{
                content: "Phillipe was caught cheating by the group ! He is going for the run."
            }, {
                content: "Catch Phillipe and get your money back."
            }],
            title: "Cheater !",
        }, {
            title: "Welcome to the lockup",
            paragraphs: [{
                content: "The group has caught the cheater and must now decide what to do with him."
            }, {
                content: "Talk to the gambler and decide his fate."
            }],
        }]
    }];
