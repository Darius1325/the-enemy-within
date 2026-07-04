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
                title: "Difficulty",
                paragraphs: [
                    {
                        content:"Not all the Tests are equal. Climbing a fence is easy but ascending the face of a sheer cliff is encredibly tough. To represent this, some Tests are assigned bonuses or penalties called Difficulty."
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
    }
];
