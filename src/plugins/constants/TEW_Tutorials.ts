// $PluginCompiler TEW_Constants.js

import TEW from "../_types/tew";

// $StartCompilation

// #region ====== TUTORIALS === //
TEW.DATABASE.TUTORIALS = [
    {
        category: "Test tutorial",
        subTutorials: [
            {
                title: "Sub-tutorial title",
                paragraphs: [
                    {
                        content: "This is content for a sub-tutorial."
                    },
                    {
                        image: "debug"
                    }
                ]
            }
        ]
    },
    {
        category: "Key Binds",
        subTutorials: [
            {
                title: "",
                paragraphs: [
                    {
                        content: ""
                    }
                ]
            }
        ]
    },
    {
        category: "Tests",
        subTutorials: [
            {
                title: "Generalities",
                paragraphs: [
                    {
                        content: "When a character takes an action with an unsure outcome, a test is made. A test consist of comparing a dice roll to one of the characteristics or skills of the character."
                    },
                    {
                        image: "debug" //TODO placeholder, replace with dice image 
                    }
                ]
            },
            {
                title: "Simple tests",
                paragraphs: [
                    {
                        content: "Simple tests are used when the need is to determine if a character succeeds or fails at a simple task, such as leap a churning stream. To perform a Simple test, a d100 is rolled and the result is compared to the Skill or Characteristic best suited to the action."
                    },
                    {
                        content: "If the roll is lower or equal to the Skill or Characteristic, the Test's outcome is a success and the Character performs the task."
                    },
                    {
                        content: "If the roll is higher than the Skill or Characteristic, the Test's outcom is a failure, and the Character does not perform the task."
                    },
                    {
                        content: "Note that some tests may be modified based on the difficulty of the action. See the Difficulty tutorial for more on the matter."
                    }
                ]
            },
            {
                title: "Automatic failure and success",
                paragraphs: [
                    {
                        content: "No matter how skilled or talented a character is, there is always a chance of failure. Equally, there is always a chance of success, no matter the odds stacked against a Character." 
                    },
                    {
                        content: "If a Character rolls 96-00 on any Test, it is always a failure, even if the modified Characteristic or Skill is 96 or higher. Similarly, if a Character rolls 01-05 on a Test, it is always a success, even if the modified Characteristic or Skill is less than 01-05."
                    }
                ]
            },
            {
                title: "Success Levels",
                paragraphs: [
                    {
                        content: "Simply knowing if a Tests is passed or failed is not always enough. Sometimes it is useful to know how well a Character succeeds or how badly he fails a Test. This detail is governed by Success Levels."
                    },
                    {
                        content: "Success Levels (shortened to SL) are used to describe the effctiveness of a Test. To determine the SL of a Test, the 10s number of the rolled dice is substracted from the 10s number of the Skill or Characteristic being tested, including any modifiers. The higher the SL, the better the outcome."
                    },
                    {
                        content: "If a Test is automatically succeeded due to rolling 01-05, the SL scored is +1SL or the SL rolled, whichever is higher."
                    },
                    {
                        content: "If a Test is automatically failed due to rolling 96-00, the SL scored is -1SL or the SL rolled, whichever is lower."
                    }
                ]
            },
            {
                title: "Modifiers",
                paragraphs: [
                    {
                        content: "Not all the Tests are equal. Climbing a fence is easy but ascending the face of a sheer cliff is encredibly tough. To represent this, some Tests are assigned bonuses or penalties called Modifiers."
                    },
                    {
                        content: "These modifiers take the form of positive or negative SLs to add or remove from the SLs obtained during a test."
                    },
                    {
                        content: "A modifier can adjust the result of a test to 0 SL. In this situation, if the dice roll was less or equal to the tested skill, the outcome is a success (+0 SL), if not it's a failure (-0 SL)."
                    }
                ]
            },
            {
                title: "Advantage and Disadvantage",
                paragraphs: [
                    {
                        content: "Sometimes a rule, ability, or circumstance will grant you Advantage or Disadvantage on a Test. When making a Test with Advantage, you may reverse the digits of a roll if that would improve your result, so a 71 could become a 17. When making a Test with Disadvantage, you must reverse the digits if the result would be worse, so a 19 becomes a 91."
                    },
                    {
                        content: "Advantage and Disadvantage cancel each other out. If you have multiple sources of Advantage, each one after the first grants +1 SL, while multiple sources of Disadvantage inflict -1 SL."
                    }
                ]
            },
            {
                title: "Opposed Tests",
                paragraphs: [
                    {
                        content: "Sometimes a Character matched his capabilities directly against those of an opponent. Such a Test is called an Opposed Test."
                    },
                    {
                        content: "An Opposed Test is handled just like any other Test, but both parties make a Test. The party with the higher SL wins the Test. If both participants score the same SL, the party with the higher tested Characteristic wins."
                    }
                ]
            },
            {
                title: "Extended Tests",
                paragraphs: [
                    {
                        content: "Sometimes the adventure will call for a specific number of SLs be achieved to fully succeed at a time-consuming or especially taxing task. Doing this requires a Test called an Extended Test."
                    },
                    {
                        content: "Extended Tests are handled in the same fashion as any other Test, but the SL scored from multiple rolls are added together to reach a specified target. If the total SL scored falls bellow 0, you can start again from scratch with the next roll."
                    }
                ]
            }
        ]
    },
    {
        category: "Flattery, Bribery and Status",
        subTutorials: [
            {
                title: "Status",
                paragraphs: [
                    {
                        content: "Old World society is rigidly stratified. Commoners know their place, while the elite enjoy power and privilege that are rarely questionned. Everyone else is acutely aware of their social standing, and many spend their lives trying to improve it. Your status is determined by your current Career level:"
                    },
                    {
                        content: "Gold: The rulers of society, their advisers, protectors, magistrates, and the independently wealthy. Reaching Gold usually requires talent, success, and more than a little luck."
                    },
                    {
                        content: "Silver: Skilled professionals, merchants, artisans, and respected tradesfolk. Though not wealthy or powerful, they enjoy a comfortable and respectable place in society."
                    },
                    {
                        content: "Brass: Labourers, peasants, unskilled workers, and the poor. This Tier also includes many criminals, ne’er-dowells, and those with no steady livelihood."
                    }
                ]
            },
            {
                title: "Status and Social Tests",
                paragraphs: [
                    {
                        content: "Status shapes almost every social interaction in the Empire. Those of higher Status are used to giving orders, while those beneath them are expected to know their place. Crossing these social boundaries often makes Social Tests more difficult. A noble may happily enjoy a Brass Status Entertainer’s performance, but be far less willing to share a drink afterwards."
                    },
                    {
                        content: "Charm and Fellowship Tests: Charm, Gossip, and most other Fellowship Tests suffer -1 SL for each tier of Status between the characters. A Silver Status merchant incurs -1 SL when dealing with a Brass Status peasant, while that same peasant suffers -2 SL when dealing with a Gold Status noble."
                    },
                    {
                        content: "Intimidate Tests: While within civilisation, Gold Status characters gain Advantage when intimidating those of lower Status. In the wilds, or once violence has already begun, this benefit does not apply."
                    },
                    {
                        content: "Leadership: Status plays a very important role in Leadership. Indeed, the State Army normally only grants higher ranks to those of noble birth. Characters gain Advantage on Leadership Tests made to command those of lower Status."
                    },
                    {
                        content: "Standing: Some merchants are reluctant to trade with people under their own Status."
                    }
                ]
            },
            {
                title: "Negociating a discount",
                paragraphs: [
                    {
                        content: "When encountering a merchant, characters may wish to haggle the prices. These characters make an Opposed Challenging (+0 SL) Haggle Test against the merchant. On a success, the total price is reduced by 10 percent, or 20 percent for a critical success. A critical failure may have the opposed effect."
                    },
                    {
                        content: "Only one Haggle Test can be made per vendor, as most merchants have little patience for negotiating every individual item."
                    }
                ]
            },
            {
                title: "Lies and Deception",
                paragraphs: [
                    {
                        content: "Lies are a common tool of criminals, politicians, and anyone trying to stay out of trouble."
                    },
                    {
                        content: "If someone has reason to suspect a lie, the liar makes a Charm Test opposed by the listener’s Intuition. If the liar fails, the listener knows they are being deceived, but not necessarily what the truth is."
                    }
                ]
            }
        ]
    },
    {
        category: "Combat - Generalities",
        subTutorials: [
            {
                title: "Timing",
                paragraphs: [
                    {
                        content: "In combat, the exact timing of actions matters more, so time is organised into:"
                    },
                    {
                        content: "Rounds: A Round is enough time for all Characters to attempt a Test and move into position. It is normally just a few seconds, the GM can decide exactly how long if necessary."
                    },
                    {
                        content: "Turns: During a Round, each combatant has a Turn to perform an Action and a Move."
                    },
                    {
                        content: "Initiative Order: Each combatant usually takes their Turn in Combat Initiative order, from highest to lowest."
                    }
                ]
            },
            {
                title: "Combat Initiative Order",
                paragraphs: [
                    {
                        content: "Combatants take their Turns in Combat Initiative order. This is determined at the start of any combat by rolling a d10 and adding the character’s Initiative Bonus."
                    },
                    {
                        content: "Those with higher results act before those with lower results. If two or more combatants have the same Combat Initiative, the one with the higher Initiative acts first. If they also have the same Initiative, they make an Opposed Initiative Test, with the winner acting fisrt."
                    },
                    {
                        content: "Some Talents can modify Initiative order."
                    }
                ]
            },
            {
                title: "Surprise",
                paragraphs: [
                    {
                        content: "Catching your enemies unawares can give you a decisive advantage. Characters might achieve Surprise by hiding, approaching from an unexpected direction, exploiting a distraction, or suddenly attacking unwary opponents. Clever plans may also catch the enemy off guard."
                    },
                    {
                        content: "If there is a chance the ambushers will be detected, an Opposed Stealth/Perception Testis made, usually between the worst Stealth among the ambushers and the best Perception among their opponents. If the ambushers win, each opponent gains the Surprised Condition. Otherwise, combat begins normally."
                    }
                ]
            }
        ]
    },
    {
        category: "Combat - Turns",
        subTutorials: [
            {
                title: "Taking your turn",
                paragraphs: [
                    {
                        content: "On your Turn, you normally have one Move and one Action, which you can take in either order. Narratively, these happen together. You can also skip taking a Move or Action, though once your Turn ends you must wait until the next Round to act again."
                    }
                ]
            },
            {
                title: "Move",
                paragraphs: [
                    {
                        content: "See Combat - Moving in Combat"
                    }
                ]
            },
            {
                title: "Action",
                paragraphs: [
                    {
                        content: "Your Action is used to do something in combat, whether that is attacking a mutant, leaping between rooftops, or pausing to assess the situation."
                    },
                    {
                        content: "For details on attacking, see Combat - Attacking, Religion and Belief and Magic. Some Talents may also be used in combat."
                    }
                ]
            },
            {
                title: "Free Action",
                paragraphs: [
                    {
                        content: "Some things do not use your Action, such as shouting a warning, drawing a weapon, or drinking a potion. These are Free Actions and do not count towards your limit of a Move and an Action in a Round."
                    }
                ]
            },
            {
                title: "On the Defensive",
                paragraphs: [
                    {
                        content: "Sometimes it is better to prepare than act. As your Action, choose a Skill to use defensively. Until the start of your next Turn, you gain +2 SL on defensive Tests using that Skill."
                    },
                    {
                        content: "This might mean preparing to dodge or parry incoming attacks, holding a doorway, readying Language (Magick) to counter hostile Spells."
                    }
                ]
            }
        ]
    },
    {
        category: "Combat - Moving in Combat",
        subTutorials: [
            {
                title: "Simple Movement",
                paragraphs: [
                    {
                        content: "When moving during its turn, a character may move up to its Movement caracteristic squares on a battle map."
                    }
                ]
            },
            {
                title: "Sprinting",
                paragraphs: [
                    {
                        content: "On your Turn, you can use your Action to sprint. Sprinting doubles your Movement caracteristic."
                    }
                ]
            },
            {
                title: "Charging",
                paragraphs: [
                    {
                        content: "If you are not Engaged, you may use your Movement to Charge. This requires an Average (+2 SL) Athletics Test, and the distance covered is in addition to your Move this round. You sprint your Run movement + SL in squares. If you do, your Action must be a Melee Test."
                    },
                    {
                        content: "If your target was at least your Movement in squares away before you Charged, but within your Run range, you also gain Momentum as you barrel into your opponent."
                    }
                ]
            },
            {
                title: "Disengaging",
                paragraphs: [
                    {
                        content: "If you are Engaged and wish to leave combat, you have two options."
                    },
                    {
                        content: "If you have Momentum, you may lose it to move away from your opponents without penalty. You may then move normally, including Charging another target, Running, or retreating to attack at range."
                    },
                    {
                        content: "If you do not have Momentum, you must use your Action to make a Dodge or Perform (Acrobatics) Test, opposed by the highest Melee Skill among foes you are Engaged with. While Outnumbered, make this Test with Disadvantage. If you are Surrounded, you cannot Disengage at all."
                    },
                    {
                        content: "If you succeed, you are no longer Engaged and may move normally. Should you fail, your opponents gain Momentum and you remain Engaged."
                    }
                ]
            },
            {
                title: "Fleeing",
                paragraphs: [
                    {
                        content: "If you cannot escape otherwise, you may Flee as your Move. Fleeing is often involuntary, caused by Terror or magic, or may be your only option if you cannot Disengage. You may Flee even if you are Surrounded, throwing yourself into your enemies’ blades for the merest chance at escape."
                    },
                    {
                        content: "When you choose to Flee, each Engaged opponent immediately gains Momentum, which they may lose to make one free Melee Attack against you. You gain 1 Broken Condition for each enemy you were Engaged with."
                    }
                ]
            }
        ]
    }
];
