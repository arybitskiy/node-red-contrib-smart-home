import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010F:1000:1001",
            name: "OzwInfoPage",
          },
          { text: "images/fibaro/fgkf601.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2064/",
            id: "1000",
            name: "ZWProductPage",
            type: "1001",
          },
          {
            text:
              "1)\tPlace the KeyFob within the direct range of your Z-Wave controller.\n2)\tSet the main Z-Wave controller in (security/non-security) add mode (see the controller’s manual).\n3)\tPress any button three times.\n4)\tWait for the adding process to end.\n5)\tSuccessful adding will be confirmed by the Z-Wave controller’s message and green LED colour.",
            name: "InclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "1001",
          },
          {
            text:
              "FIBARO KeyFob is a Z-Wave Plus compatible, battery-powered, compact remote control.\nSix buttons allow you to control other devices through the Z-Wave network and run various scenes defined in FIBARO System.\nConfigure actions for one, two, three clicks and holding the button to suit all your needs.\nBuilt-in locking system will ensure that unauthorized person will not take control of your home.",
            name: "Description",
          },
          {
            text:
              "Reset procedure allows to restore the device back to its factory settings, which means all information about the Z-Wave controller and user configuration will be deleted. There are two ways of resetting the device:\n•\tResetting using the menu\n1)\tPress O and – simultaneously.\n2)\tPress Δ or X until LED glows yellow.\n3)\tPress + to confirm.\n•\tResetting on start-up\n1)\tRemove the battery.\n2)\tHold O and + while inserting the battery.\nSuccessful resetting will be confirmed by smoothly brightening and dimming of the yellow LED colour.\n\nPlease use this procedure only when the network primary controller is missing or otherwise inoperable",
            name: "ResetDescription",
          },
          {
            text:
              "The Keyfob needs to be woken up to receive information about the new configuration from the Z-Wave controller, like parameters and associations. To wake up the device press O and + simultaneously or use 1st menu position:\n1)\tPress O and – simultaneously.\n2)\tPress Δ or X until LED glows white.\n3)\tPress + to confirm.",
            name: "WakeupDescription",
          },
          {
            text:
              "1)\tPlace the KeyFob within the direct range of your Z-Wave controller.\n2)\tSet the main Z-Wave controller in remove mode (see the controller’s manual).\n3)\tPress O and – simultaneously.\n4)\tPress Δ or X until LED glows green.\n5)\tPress + to confirm.\n6)\tWait for the removing process to end.\n7)\tSuccessful removing will be confirmed by the Z-Wave controller’s message.",
            name: "ExclusionDescription",
          },
          { text: "FGKF-601", id: "1000", name: "Identifier", type: "1001" },
          { text: "FIBARO KeyFob", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2120/FGKF-601-EN-T-v1.0_30.11.2016.pdf",
            name: "ProductManual",
          },
          {
            text: "https://products.z-wavealliance.org/products/2120/",
            id: "2000",
            name: "ZWProductPage",
            type: "1001",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "2000",
            name: "FrequencyName",
            type: "1001",
          },
          { text: "FGKF-601", id: "2000", name: "Identifier", type: "1001" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2064/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2120/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 5,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Lock Mode - unlocking sequence",
            max: "28086",
            min: "0",
            type: "short",
            value: "0",
            Help:
              '\n\t\t\tThis parameter allows to activate Lock Mode and set up unlocking sequence. \n\t\t\tDevice will lock after time set in parameter 2 or after pressing and holding selected button. \n\t\t\t0 - Lock Mode disabled.\n\t\t\t9-28086 - unlocking sequence.\n\t\t\tSee "Lock Mode" on page 9 for more information.\n\t\t\t',
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Lock Mode - time to lock and locking button",
            max: "1791",
            min: "0",
            type: "short",
            value: "60",
            Help:
              '\n\t\t\tThis parameter allows to set time that must elapse from the last press of the button to lock the device and locking button.\n\t\t\tSetting locking button will deactivate associations and scenes for pressing and holding the selected button.\n\t\t\tThis parameter is irrelevant if parameter 1 is set to 0 (Lock Mode disable).\n\t\t\t0 - Lock Mode disabled.\n\t\t\t5-1791- calculated value.\n\t\t\tSee "Lock Mode" on page 9 for more information\n\t\t\t',
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "First scene sequence",
            max: "28086",
            min: "0",
            type: "short",
            value: "0",
            Help:
              '\n\t\t\tThis parameter allows to set up sequence that activates scene with ID 7.\n\t\t\t0 - 1st sequence disabled.\n\t\t\t9-28086 - value of sequence.\n\t\t\tSee "Sequences" on page 10 for more information.\t\t\t\n\t\t\t',
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Second scene sequence",
            max: "28086",
            min: "0",
            type: "short",
            value: "0",
            Help:
              '\n\t\t\tThis parameter allows to set up sequence that activates scene with ID 8.\n\t\t\t0 - 1st sequence disabled.\n\t\t\t9-28086 - value of sequence.\n\t\t\tSee "Sequences" on page 10 for more information.\t\t\t\n\t\t\t',
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Third scene sequence",
            max: "28086",
            min: "0",
            type: "short",
            value: "0",
            Help:
              '\n\t\t\tThis parameter allows to set up sequence that activates scene with ID 9.\n\t\t\t0 - 1st sequence disabled.\n\t\t\t9-28086 - value of sequence.\n\t\t\tSee "Sequences" on page 10 for more information.\t\t\t\n\t\t\t',
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Fourth scene sequence",
            max: "28086",
            min: "0",
            type: "short",
            value: "0",
            Help:
              '\n\t\t\tThis parameter allows to set up sequence that activates scene with ID 10.\n\t\t\t0 - 1st sequence disabled.\n\t\t\t9-28086 - value of sequence.\n\t\t\tSee "Sequences" on page 10 for more information.\t\t\t\n\t\t\t',
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Fifth scene sequence",
            max: "28086",
            min: "0",
            type: "short",
            value: "0",
            Help:
              '\n\t\t\tThis parameter allows to set up sequence that activates scene with ID 11.\n\t\t\t0 - 1st sequence disabled.\n\t\t\t9-28086 - value of sequence.\n\t\t\tSee "Sequences" on page 10 for more information.\t\t\t\n\t\t\t',
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Sixth scene sequence",
            max: "28086",
            min: "0",
            type: "short",
            value: "0",
            Help:
              '\n\t\t\tThis parameter allows to set up sequence that activates scene with ID 12.\n\t\t\t0 - 1st sequence disabled.\n\t\t\t9-28086 - value of sequence.\n\t\t\tSee "Sequences" on page 10 for more information.\t\t\t\n\t\t\t',
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Sequences - timeout",
            max: "30",
            min: "5",
            type: "byte",
            value: "10",
            Help:
              "\n\t\t\tThis parameter allows to set time that must elapse from the last press of the button to check if the sequence is valid.\n\t\t\tAvailable settings: 5-30 (0.5-3s, 0.1s step) - time to lock\n\t\t\t",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Single button associations - operating mode",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter allows to choose operating mode for single button associations.",
            Item: [
              { label: "Single press switches state to opposite", value: "0" },
              {
                label:
                  "Single press switches state to opposite, double press sets to maximum level",
                value: "1",
              },
              {
                label: "Single press turns on, double press turns off",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Value sent to Square association group",
            max: "255",
            min: "1",
            type: "byte",
            value: "255",
            Help:
              "\n\t\t\tThis parameter allows to set value sent to devices in association group. \n\t\t\tIt will result in turning multilevel devices on with set or last level. \n\t\t\tValue is irrelevant for simple on/off devices.\n\t\t\tAvailable settings: 1-99 or 255.\n\t\t\t",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Value sent to Circle association group",
            max: "255",
            min: "1",
            type: "byte",
            value: "255",
            Help:
              "\n\t\t\tThis parameter allows to set value sent to devices in association group. \n\t\t\tIt will result in turning multilevel devices on with set or last level. \n\t\t\tValue is irrelevant for simple on/off devices.\n\t\t\tAvailable settings: 1-99 or 255.\n\t\t\t",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Value sent to Cross association group",
            max: "255",
            min: "1",
            type: "byte",
            value: "255",
            Help:
              "\n\t\t\tThis parameter allows to set value sent to devices in association group. \n\t\t\tIt will result in turning multilevel devices on with set or last level. \n\t\t\tValue is irrelevant for simple on/off devices.\n\t\t\tAvailable settings: 1-99 or 255.\n\t\t\t",
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Value sent to Triangle association group",
            max: "255",
            min: "1",
            type: "byte",
            value: "255",
            Help:
              "\n\t\t\tThis parameter allows to set value sent to devices in association group. \n\t\t\tIt will result in turning multilevel devices on with set or last level. \n\t\t\tValue is irrelevant for simple on/off devices.\n\t\t\tAvailable settings: 1-99 or 255.\n\t\t\t",
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Value sent to Minus association group",
            max: "255",
            min: "1",
            type: "byte",
            value: "255",
            Help:
              "\n\t\t\tThis parameter allows to set value sent to devices in association group. \n\t\t\tIt will result in turning multilevel devices on with set or last level. \n\t\t\tValue is irrelevant for simple on/off devices.\n\t\t\tAvailable settings: 1-99 or 255.\n\t\t\t",
          },
          {
            genre: "config",
            index: "16",
            instance: "1",
            label: "Value sent to Plus association group",
            max: "255",
            min: "1",
            type: "byte",
            value: "255",
            Help:
              "\n\t\t\tThis parameter allows to set value sent to devices in association group. \n\t\t\tIt will result in turning multilevel devices on with set or last level. \n\t\t\tValue is irrelevant for simple on/off devices.\n\t\t\tAvailable settings: 1-99 or 255.\n\t\t\t",
          },
          {
            genre: "config",
            index: "17",
            instance: "1",
            label: "Paired buttons association for Square and Circle",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\tThis parameter allows to activate paired buttons association mode for Square and Circle buttons. \n\t\t\tPaired buttons are dependent and association are sent only to Square groups. Circle turns devices on and increases value, Square turns them off and decreases value.\n\t\t\t",
            Item: [
              { label: "Inactive", value: "0" },
              { label: "Active", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "18",
            instance: "1",
            label: "Paired buttons association for Cross and Triangle",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\tThis parameter allows to activate paired buttons association mode for Cross and Triangle buttons. \n\t\t\tPaired buttons are dependent and association are sent only to Cross groups. Triangle turns devices on and increases value, Cross turns them off and decreases value.\n\t\t\t",
            Item: [
              { label: "Inactive", value: "0" },
              { label: "Active", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "19",
            instance: "1",
            label: "Paired buttons association for Minus and Plus",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n\t\t\tThis parameter allows to activate paired buttons association mode for Minus and Plus buttons. \n\t\t\tPaired buttons are dependent and association are sent only to Minus groups. Plus turns devices on and increases value, Minus turns them off and decreases value.\n\t\t\t",
            Item: [
              { label: "Inactive", value: "0" },
              { label: "Active", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "Scene activation for Square button",
            max: "255",
            min: "1",
            type: "byte",
            value: "9",
            Help:
              "\n\t\t\tThis parameter determines which actions result in sending assigned scene IDs and attributes to the controller.\n\t\t\t1 - Key Pressed 1 time.\n\t\t\t2 - Key Pressed 2 times.\n\t\t\t4 - Key Pressed 3 times.\n\t\t\t8 - Key Held Down and Released.\n\t\t\tDefault setting: 9, 1x and hold.\n\t\t\t",
          },
          {
            genre: "config",
            index: "22",
            instance: "1",
            label: "Scene activation for Circle button",
            max: "255",
            min: "1",
            type: "byte",
            value: "9",
            Help:
              "\n\t\t\tThis parameter determines which actions result in sending assigned scene IDs and attributes to the controller.\n\t\t\t1 - Key Pressed 1 time.\n\t\t\t2 - Key Pressed 2 times.\n\t\t\t4 - Key Pressed 3 times.\n\t\t\t8 - Key Held Down and Released.\n\t\t\tDefault setting: 9, 1x and hold.\n\t\t\t",
          },
          {
            genre: "config",
            index: "23",
            instance: "1",
            label: "Scene activation for Cross button",
            max: "255",
            min: "1",
            type: "byte",
            value: "9",
            Help:
              "\n\t\t\tThis parameter determines which actions result in sending assigned scene IDs and attributes to the controller.\n\t\t\t1 - Key Pressed 1 time.\n\t\t\t2 - Key Pressed 2 times.\n\t\t\t4 - Key Pressed 3 times.\n\t\t\t8 - Key Held Down and Released.\n\t\t\tDefault setting: 9, 1x and hold.\n\t\t\t",
          },
          {
            genre: "config",
            index: "24",
            instance: "1",
            label: "Scene activation for Triangle button",
            max: "255",
            min: "1",
            type: "byte",
            value: "9",
            Help:
              "\n\t\t\tThis parameter determines which actions result in sending assigned scene IDs and attributes to the controller.\n\t\t\t1 - Key Pressed 1 time.\n\t\t\t2 - Key Pressed 2 times.\n\t\t\t4 - Key Pressed 3 times.\n\t\t\t8 - Key Held Down and Released.\n\t\t\tDefault setting: 9, 1x and hold.\n\t\t\t",
          },
          {
            genre: "config",
            index: "25",
            instance: "1",
            label: "Scene activation for Minus button",
            max: "255",
            min: "1",
            type: "byte",
            value: "9",
            Help:
              "\n\t\t\tThis parameter determines which actions result in sending assigned scene IDs and attributes to the controller.\n\t\t\t1 - Key Pressed 1 time.\n\t\t\t2 - Key Pressed 2 times.\n\t\t\t4 - Key Pressed 3 times.\n\t\t\t8 - Key Held Down and Released.\n\t\t\tDefault setting: 9, 1x and hold.\n\t\t\t",
          },
          {
            genre: "config",
            index: "26",
            instance: "1",
            label: "Scene activation for Plus button",
            max: "255",
            min: "1",
            type: "byte",
            value: "9",
            Help:
              "\n\t\t\tThis parameter determines which actions result in sending assigned scene IDs and attributes to the controller.\n\t\t\t1 - Key Pressed 1 time.\n\t\t\t2 - Key Pressed 2 times.\n\t\t\t4 - Key Pressed 3 times.\n\t\t\t8 - Key Held Down and Released.\n\t\t\tDefault setting: 9, 1x and hold.\n\t\t\t",
          },
          {
            genre: "config",
            index: "29",
            instance: "1",
            label: "Associations in Z-Wave network Security Mode",
            max: "4095",
            min: "0",
            type: "short",
            value: "4095",
            Help:
              "\n\t\t\tParameter defines how commands are sent in specified association groups: using Security Mode or not.\n\t\t\tParameter is active only in Z-Wave network Security Mode. It does not apply to 1st Lifeline association group.\n\t\t\t1    : 2nd group sent using Security Mode.\n\t\t\t2    : 3rd group sent using Security Mode.\n\t\t\t4    : 4th group sent using Security Mode.\n\t\t\t8    : 5th group sent using Security Mode.\n\t\t\t16   : 6th group sent using Security Mode.\n\t\t\t32   : 7th group sent using Security Mode.\n\t\t\t64   : 8th group sent using Security Mode.\n\t\t\t128  : 9th group sent using Security Mode.\n\t\t\t256  : 10th group sent using Security Mode.\n\t\t\t512  : 11th group sent using Security Mode.\n\t\t\t1024 : 12th group sent using Security Mode.\n\t\t\t2048 : 13th group sent using Security Mode.\n\t\t\t",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "13",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Square - On/Of", max_associations: "5" },
              {
                index: "3",
                label: "Square - Multilevel",
                max_associations: "5",
              },
              { index: "4", label: "Circle - On/Of", max_associations: "5" },
              {
                index: "5",
                label: "Circle - Multilevel",
                max_associations: "5",
              },
              { index: "6", label: "Cross - On/Of", max_associations: "5" },
              {
                index: "7",
                label: "Cross - Multilevel",
                max_associations: "5",
              },
              { index: "8", label: "Triangle - On/Of", max_associations: "5" },
              {
                index: "9",
                label: "Triangle - Multilevel",
                max_associations: "5",
              },
              { index: "10", label: "Minus - On/Of", max_associations: "5" },
              {
                index: "11",
                label: "Minus - Multilevel",
                max_associations: "5",
              },
              { index: "12", label: "Plus - On/Of", max_associations: "5" },
              {
                index: "13",
                label: "Plus - Multilevel",
                max_associations: "5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
