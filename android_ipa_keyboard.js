
KeymanWeb.KR(new Keyboard_android_ipa_keyboard());

function Keyboard_android_ipa_keyboard()
{
  
  this.KI="Keyboard_android_ipa_keyboard";
  this.KN="Keyman IPA Keyboard for Android";
  this.KV=null;
  this.KH='';
  this.KM=0;
  this.KBVER="1.0";
  this.KMBM=0x0000;
  this.KVKL={
  "tablet": {
    "font": "Doulos SIL",
    "layer": [
      {
        "id": "default",
        "row": [
          {
            "id": 1,
            "key": [
              {
                "id": "K_Q",
                "text": "q",
                "sk": [
                  {
                    "text": "ʡ",
                    "id": "U_02A1"
                  },
                  {
                    "text": "ʢ",
                    "id": "U_02A2"
                  },
                  {
                    "text": "ʕ",
                    "id": "U_0295"
                  },
                  {
                    "text": "ˤ",
                    "id": "U_02E4"
                  }
                ]
              },
              {
                "id": "K_W",
                "text": "w",
                "sk": [
                  {
                    "text": "ʍ",
                    "id": "U_028D"
                  },
                  {
                    "text": "ɰ",
                    "id": "U_0270"
                  },
                  {
                    "text": "ʷ",
                    "id": "U_02B7"
                  }
                ]
              },
              {
                "id": "K_E",
                "text": "e",
                "nextlayer": "shift",
                "sk": [
                  {
                    "text": "ə",
                    "id": "U_0259"
                  },
                  {
                    "text": "ɘ",
                    "id": "U_0258"
                  },
                  {
                    "text": "ɜ",
                    "id": "U_025C"
                  },
                  {
                    "text": "ɛ",
                    "id": "U_025B"
                  },
                  {
                    "text": "œ",
                    "id": "U_0153"
                  },
                  {
                    "text": "Œ",
                    "id": "U_0152"
                  }
                ]
              },
              {
                "id": "K_R",
                "text": "r",
                "sk": [
                  {
                    "text": "ɹ",
                    "id": "U_0279"
                  },
                  {
                    "text": "ʀ",
                    "id": "U_0280"
                  },
                  {
                    "text": "ɾ",
                    "id": "U_027E"
                  },
                  {
                    "text": "ɽ",
                    "id": "U_027D"
                  },
                  {
                    "text": "ɻ",
                    "id": "U_027B"
                  },
                  {
                    "text": "ʁ",
                    "id": "U_0281"
                  }
                ]
              },
              {
                "id": "K_T",
                "text": "t",
                "sk": [
                  {
                    "text": "θ",
                    "id": "U_03b8"
                  },
                  {
                    "text": "ʈ",
                    "id": "U_0288"
                  }
                ]
              },
              {
                "id": "K_Y",
                "text": "y",
                "sk": [
                  {
                    "text": "ʏ",
                    "id": "U_028F"
                  }
                ]
              },
              {
                "id": "K_U",
                "text": "u",
                "sk": [
                  {
                    "text": "ɯ",
                    "id": "U_028F"
                  },
                  {
                    "text": "ʉ",
                    "id": "U_0289"
                  },
                  {
                    "text": "ʌ",
                    "id": "U_028C"
                  },
                  {
                    "text": "ʊ",
                    "id": "U_028A"
                  }
                ]
              },
              {
                "id": "K_I",
                "text": "i",
                "sk": [
                  {
                    "text": "ɪ",
                    "id": "U_025A"
                  },
                  {
                    "text": "ɨ",
                    "id": "U_0268"
                  }
                ]
              },
              {
                "id": "K_O",
                "text": "o",
                "sk": [
                  {
                    "text": "ɒ",
                    "id": "U_0252"
                  },
                  {
                    "text": "ɵ",
                    "id": "U_0275"
                  },
                  {
                    "text": "ø",
                    "id": "U_00F8"
                  },
                  {
                    "text": "ɔ",
                    "id": "U_0254"
                  },
                  {
                    "text": "ɞ",
                    "id": "U_025E"
                  },
                  {
                    "text": "ɤ",
                    "id": "U_0254"
                  }
                ]
              },
              {
                "id": "K_P",
                "text": "p",
                "sk": [
                  {
                    "text": "ʘ",
                    "id": "U_0298"
                  }
                ]
              }
            ]
          },
          {
            "id": 2,
            "key": [
              {
                "id": "K_A",
                "text": "a",
                "pad": 70,
                "nextlayer": "default",
                "sk": [
                  {
                    "text": "ɑ",
                    "id": "U_0251"
                  },
                  {
                    "text": "ɐ",
                    "id": "U_0250"
                  },
                  {
                    "text": "æ",
                    "id": "U_00E6"
                  }
                ]
              },
              {
                "id": "K_S",
                "text": "s",
                "sk": [
                  {
                    "text": "ʃ",
                    "id": "U_0283"
                  },
                  {
                    "text": "ʂ",
                    "id": "U_0282"
                  }
                ]
              },
              {
                "id": "K_D",
                "text": "d",
                "sk": [
                  {
                    "text": "ð",
                    "id": "U_00F0"
                  },
                  {
                    "text": "ɗ",
                    "id": "U_0257"
                  },
                  {
                    "text": "ɖ",
                    "id": "U_0256"
                  }
                ]
              },
              {
                "id": "K_F",
                "text": "f",
                "sk": [
                  {
                    "text": "ɸ",
                    "id": "U_0278"
                  }
                ]
              },
              {
                "id": "K_G",
                "text": "g",
                "sk": [
                  {
                    "text": "ɣ",
                    "id": "U_0263"
                  },
                  {
                    "text": "ɢ",
                    "id": "U_262"
                  },
                  {
                    "text": "ɠ",
                    "id": "U_0260"
                  },
                  {
                    "text": "ɡ",
                    "id": "U_0261"
                  },
                  {
                    "text": "ʛ",
                    "id": "U_029B"
                  },
                  {
                    "text": "ˠ",
                    "id": "U_02E0"
                  }
                ]
              },
              {
                "id": "K_H",
                "text": "h",
                "sk": [
                  {
                    "text": "ɥ",
                    "id": "U_0265"
                  },
                  {
                    "text": "ʜ",
                    "id": "U_029C"
                  },
                  {
                    "text": "ħ",
                    "id": "U_0127"
                  },
                  {
                    "text": "ɦ",
                    "id": "U_0266"
                  },
                  {
                    "text": "ɧ",
                    "id": "U_0267"
                  },
                  {
                    "text": "ʰ",
                    "id": "U_0280"
                  }
                ]
              },
              {
                "id": "K_J",
                "text": "j",
                "sk": [
                  {
                    "text": "ɟ",
                    "id": "U_025F"
                  },
                  {
                    "text": "ʄ",
                    "id": "U_0284"
                  },
                  {
                    "text": "ʝ",
                    "id": "U_029D"
                  },
                  {
                    "text": "ʲ",
                    "id": "U_02B2"
                  }
                ]
              },
              {
                "id": "K_K",
                "text": "k"
              },
              {
                "id": "K_L",
                "text": "l",
                "sk": [
                  {
                    "text": "ɬ",
                    "id": "U_026C"
                  },
                  {
                    "text": "ʟ",
                    "id": "U_029F"
                  },
                  {
                    "text": "ɮ",
                    "id": "U_025E"
                  },
                  {
                    "text": "ɭ",
                    "id": "U_026D"
                  },
                  {
                    "text": "ʎ",
                    "id": "U_028E"
                  },
                  {
                    "text": "ɺ",
                    "id": "U_027A"
                  },
                  {
                    "text": "ˡ",
                    "id": "U_02E1"
                  }
                ]
              },
              {
                "id": "T_new_20",
                "text": "",
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": 3,
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "width": "110",
                "sp": "1",
                "nextlayer": "shift"
              },
              {
                "id": "K_Z",
                "text": "z",
                "sk": [
                  {
                    "text": "ʒ",
                    "id": "U_0292"
                  },
                  {
                    "text": "ʑ",
                    "id": "U_0291"
                  },
                  {
                    "text": "ʐ",
                    "id": "U_0290"
                  }
                ]
              },
              {
                "id": "K_X",
                "text": "x",
                "sk": [
                  {
                    "text": "χ",
                    "id": "U_03C7"
                  }
                ]
              },
              {
                "id": "K_C",
                "text": "c",
                "sk": [
                  {
                    "text": "ç",
                    "id": "U_00E7"
                  },
                  {
                    "text": "ɕ",
                    "id": "U_0255"
                  }
                ]
              },
              {
                "id": "K_V",
                "text": "v",
                "sk": [
                  {
                    "text": "ⱱ",
                    "id": "U_2c71"
                  }
                ]
              },
              {
                "id": "K_B",
                "text": "b",
                "sk": [
                  {
                    "text": "β",
                    "id": "U_03B2"
                  },
                  {
                    "text": "ʙ",
                    "id": "U_0299"
                  },
                  {
                    "text": "ɓ",
                    "id": "U_0253"
                  }
                ]
              },
              {
                "id": "K_N",
                "text": "n",
                "sk": [
                  {
                    "text": "ɲ",
                    "id": "U_0272"
                  },
                  {
                    "text": "ɴ",
                    "id": "U_0274"
                  },
                  {
                    "text": "ŋ",
                    "id": "U_014B"
                  },
                  {
                    "text": "ŋ",
                    "id": "U_014B"
                  },
                  {
                    "text": "ɳ",
                    "id": "U_0273"
                  },
                  {
                    "text": "ⁿ",
                    "id": "U_207F"
                  }
                ]
              },
              {
                "id": "K_M",
                "text": "m",
                "sk": [
                  {
                    "text": "ɱ",
                    "id": "U_0271"
                  }
                ]
              },
              {
                "id": "K_PERIOD",
                "text": ".",
                "sk": [
                  {
                    "text": ",",
                    "id": "K_COMMA"
                  },
                  {
                    "text": "!",
                    "id": "K_1",
                    "layer": "shift"
                  },
                  {
                    "text": "?",
                    "id": "K_SLASH",
                    "layer": "shift"
                  },
                  {
                    "text": "'",
                    "id": "K_QUOTE"
                  },
                  {
                    "text": "\"",
                    "id": "K_QUOTE",
                    "layer": "shift"
                  },
                  {
                    "text": "\\",
                    "id": "K_BKSLASH"
                  },
                  {
                    "text": ":",
                    "id": "K_COLON",
                    "layer": "shift"
                  },
                  {
                    "text": ";",
                    "id": "K_COLON"
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "90",
                "sp": "1"
              }
            ]
          },
          {
            "id": 4,
            "key": [
              {
                "id": "K_NUMLOCK",
                "text": "*123*",
                "width": "140",
                "sp": "1",
                "nextlayer": "numeric"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "120",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "text": "",
                "width": "630",
                "sp": "0"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "140",
                "sp": "1"
              }
            ]
          }
        ]
      },
      {
        "id": "shift",
        "row": [
          {
            "id": 1,
            "key": [
              {
                "id": "K_Q",
                "text": "Q"
              },
              {
                "id": "K_W",
                "text": "W"
              },
              {
                "id": "K_E",
                "text": "E"
              },
              {
                "id": "K_R",
                "text": "R"
              },
              {
                "id": "K_T",
                "text": "T"
              },
              {
                "id": "K_Y",
                "text": "Y"
              },
              {
                "id": "K_U",
                "text": "U"
              },
              {
                "id": "K_I",
                "text": "I"
              },
              {
                "id": "K_O",
                "text": "O"
              },
              {
                "id": "K_P",
                "text": "P"
              }
            ]
          },
          {
            "id": 2,
            "key": [
              {
                "id": "K_A",
                "text": "A",
                "pad": 70
              },
              {
                "id": "K_S",
                "text": "S"
              },
              {
                "id": "K_D",
                "text": "D"
              },
              {
                "id": "K_F",
                "text": "F"
              },
              {
                "id": "K_G",
                "text": "G"
              },
              {
                "id": "K_H",
                "text": "H"
              },
              {
                "id": "K_J",
                "text": "J"
              },
              {
                "id": "K_K",
                "text": "K"
              },
              {
                "id": "K_L",
                "text": "L"
              },
              {
                "id": "T_new_54",
                "text": "",
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": 3,
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "width": "110",
                "sp": "2",
                "nextlayer": "default"
              },
              {
                "id": "K_Z",
                "text": "Z"
              },
              {
                "id": "K_X",
                "text": "X"
              },
              {
                "id": "K_C",
                "text": "C"
              },
              {
                "id": "K_V",
                "text": "V"
              },
              {
                "id": "K_B",
                "text": "B"
              },
              {
                "id": "K_N",
                "text": "N"
              },
              {
                "id": "K_M",
                "text": "M"
              },
              {
                "id": "K_PERIOD",
                "text": ".",
                "sk": [
                  {
                    "text": ",",
                    "id": "K_COMMA",
                    "layer": "default"
                  },
                  {
                    "text": "!",
                    "id": "K_1",
                    "layer": "shift"
                  },
                  {
                    "text": "?",
                    "id": "K_SLASH",
                    "layer": "shift"
                  },
                  {
                    "text": "'",
                    "id": "K_QUOTE",
                    "layer": "default"
                  },
                  {
                    "text": "\"",
                    "id": "K_QUOTE",
                    "layer": "shift"
                  },
                  {
                    "text": "\\",
                    "id": "K_BKSLASH",
                    "layer": "default"
                  },
                  {
                    "text": ":",
                    "id": "K_COLON",
                    "layer": "shift"
                  },
                  {
                    "text": ";",
                    "id": "K_COLON",
                    "layer": "default"
                  }
                ]
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "90",
                "sp": "1"
              }
            ]
          },
          {
            "id": 4,
            "key": [
              {
                "id": "K_NUMLOCK",
                "text": "*123*",
                "width": "140",
                "sp": "1",
                "nextlayer": "numeric"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "120",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "text": "",
                "width": "630",
                "sp": "0"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "140",
                "sp": "1"
              }
            ]
          }
        ]
      },
      {
        "id": "numeric",
        "row": [
          {
            "id": 1,
            "key": [
              {
                "id": "K_1",
                "text": "1"
              },
              {
                "id": "K_2",
                "text": "2"
              },
              {
                "id": "K_3",
                "text": "3"
              },
              {
                "id": "K_4",
                "text": "4"
              },
              {
                "id": "K_5",
                "text": "5"
              },
              {
                "id": "K_6",
                "text": "6"
              },
              {
                "id": "K_7",
                "text": "7"
              },
              {
                "id": "K_8",
                "text": "8"
              },
              {
                "id": "K_9",
                "text": "9"
              },
              {
                "id": "K_0",
                "text": "0"
              }
            ]
          },
          {
            "id": 2,
            "key": [
              {
                "id": "K_4",
                "text": "$",
                "pad": 70,
                "layer": "shift"
              },
              {
                "id": "K_2",
                "text": "@",
                "layer": "shift"
              },
              {
                "id": "K_3",
                "text": "#",
                "layer": "shift"
              },
              {
                "id": "K_5",
                "text": "%",
                "layer": "shift"
              },
              {
                "id": "K_7",
                "text": "&",
                "layer": "shift"
              },
              {
                "id": "K_HYPHEN",
                "text": "_",
                "layer": "shift"
              },
              {
                "id": "K_EQUAL",
                "text": "=",
                "layer": "default"
              },
              {
                "id": "K_BKSLASH",
                "text": "|",
                "layer": "shift"
              },
              {
                "id": "K_BKSLASH",
                "text": "\\",
                "layer": "default"
              },
              {
                "id": "T_new_55",
                "text": "",
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": 3,
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "width": "110",
                "sp": "1"
              },
              {
                "id": "K_LBRKT",
                "text": "[",
                "sk": [
                  {
                    "id": "U_00AB",
                    "text": "«"
                  },
                  {
                    "id": "K_COMMA",
                    "text": "<",
                    "layer": "shift"
                  },
                  {
                    "id": "K_LBRKT",
                    "text": "{",
                    "layer": "shift"
                  }
                ]
              },
              {
                "id": "K_9",
                "text": "(",
                "layer": "shift"
              },
              {
                "id": "K_0",
                "text": ")",
                "layer": "shift"
              },
              {
                "id": "K_RBRKT",
                "text": "]",
                "sk": [
                  {
                    "id": "U_00BB",
                    "text": "»"
                  },
                  {
                    "id": "K_PERIOD",
                    "text": ">",
                    "layer": "shift"
                  },
                  {
                    "id": "K_RBRKT",
                    "text": "}",
                    "layer": "shift"
                  }
                ]
              },
              {
                "id": "K_EQUAL",
                "text": "+",
                "layer": "shift"
              },
              {
                "id": "K_HYPHEN",
                "text": "-",
                "layer": "default"
              },
              {
                "id": "K_8",
                "text": "*",
                "layer": "shift"
              },
              {
                "id": "K_SLASH",
                "text": "/",
                "layer": "default"
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "90",
                "sp": "1"
              }
            ]
          },
          {
            "id": 4,
            "key": [
              {
                "id": "K_LOWER",
                "text": "*abc*",
                "width": "140",
                "sp": "1",
                "nextlayer": "default"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "120",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "text": "",
                "width": "630",
                "sp": "0"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "140",
                "sp": "1"
              }
            ]
          }
        ]
      },
      {
        "id": "Diacritic",
        "row": [
          {
            "id": 1,
            "key": [
              {
                "id": "U_02C8",
                "text": "ˈ",
                "sk": [
                  {
                    "text": "ˌ",
                    "id": "U_02CC"
                  }
                ]
              },
              {
                "id": "K_2",
                "text": "2"
              },
              {
                "id": "K_3",
                "text": "3"
              },
              {
                "id": "K_4",
                "text": "4"
              },
              {
                "id": "K_5",
                "text": "5"
              },
              {
                "id": "K_6",
                "text": "6"
              },
              {
                "id": "K_7",
                "text": "7"
              },
              {
                "id": "K_8",
                "text": "8"
              },
              {
                "id": "K_9",
                "text": "9"
              },
              {
                "id": "K_0",
                "text": "0"
              }
            ]
          },
          {
            "id": 2,
            "key": [
              {
                "id": "K_4",
                "text": "$",
                "pad": 70,
                "layer": "shift"
              },
              {
                "id": "K_2",
                "text": "@",
                "layer": "shift"
              },
              {
                "id": "K_3",
                "text": "#",
                "layer": "shift"
              },
              {
                "id": "K_5",
                "text": "%",
                "layer": "shift"
              },
              {
                "id": "K_7",
                "text": "&",
                "layer": "shift"
              },
              {
                "id": "K_HYPHEN",
                "text": "_",
                "layer": "shift"
              },
              {
                "id": "K_EQUAL",
                "text": "=",
                "layer": "default"
              },
              {
                "id": "K_BKSLASH",
                "text": "|",
                "layer": "shift"
              },
              {
                "id": "K_BKSLASH",
                "text": "\\",
                "layer": "default"
              },
              {
                "id": "T_new_55",
                "text": "",
                "width": "10",
                "sp": "10"
              }
            ]
          },
          {
            "id": 3,
            "key": [
              {
                "id": "K_SHIFT",
                "text": "*Shift*",
                "width": "110",
                "sp": "1",
                "sk": [
                  {
                    "text": "DC",
                    "id": "T_new_138",
                    "nextlayer": "Diacritic"
                  }
                ]
              },
              {
                "id": "K_LBRKT",
                "text": "[",
                "sk": [
                  {
                    "id": "U_00AB",
                    "text": "«"
                  },
                  {
                    "id": "K_COMMA",
                    "text": "<",
                    "layer": "shift"
                  },
                  {
                    "id": "K_LBRKT",
                    "text": "{",
                    "layer": "shift"
                  }
                ]
              },
              {
                "id": "K_9",
                "text": "(",
                "layer": "shift"
              },
              {
                "id": "K_0",
                "text": ")",
                "layer": "shift"
              },
              {
                "id": "K_RBRKT",
                "text": "]",
                "sk": [
                  {
                    "id": "U_00BB",
                    "text": "»"
                  },
                  {
                    "id": "K_PERIOD",
                    "text": ">",
                    "layer": "shift"
                  },
                  {
                    "id": "K_RBRKT",
                    "text": "}",
                    "layer": "shift"
                  }
                ]
              },
              {
                "id": "K_EQUAL",
                "text": "+",
                "layer": "shift"
              },
              {
                "id": "K_HYPHEN",
                "text": "-",
                "layer": "default"
              },
              {
                "id": "K_8",
                "text": "*",
                "layer": "shift"
              },
              {
                "id": "K_SLASH",
                "text": "/",
                "layer": "default"
              },
              {
                "id": "K_BKSP",
                "text": "*BkSp*",
                "width": "90",
                "sp": "1"
              }
            ]
          },
          {
            "id": 4,
            "key": [
              {
                "id": "K_LOWER",
                "text": "*abc*",
                "width": "140",
                "sp": "1",
                "nextlayer": "default"
              },
              {
                "id": "K_LOPT",
                "text": "*Menu*",
                "width": "120",
                "sp": "1"
              },
              {
                "id": "K_SPACE",
                "text": "",
                "width": "630",
                "sp": "0"
              },
              {
                "id": "K_ENTER",
                "text": "*Enter*",
                "width": "140",
                "sp": "1"
              }
            ]
          }
        ]
      }
    ]
  }
}
;
  this.KVER="10.0.988.0";
  this.gs=function(t,e) {
    return this.g_main(t,e);
  };
  this.g_main=function(t,e) {
    var k=KeymanWeb,r=0,m=0;
    return r;
  };
}
