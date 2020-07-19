import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010F:1000:0D01",
            name: "OzwInfoPage",
          },
          { text: "images/fibaro/fggc001.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1655/",
            id: "1000",
            name: "ZWProductPage",
            type: "0D01",
          },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "0D01",
          },
          {
            text:
              "1)\tPlace the Swipe within the direct range of your Z-Wave controller.\n2)\tSet the main controller in (security/non-security) add mode (see the controller’s manual).\n3)\tMove and hold your hand close to the centre of the pad.\n4)\tIf the device is battery powered, high pitched beep will signal exiting the Standby Mode.\n5)\tLoud sound sequence will confirm entering the menu, keep holding your hand.\n6)\tAfter hearing two short beeps, withdraw the hand and perform swiping up gesture to confirm selection (two beeps will confirm validity).\n7)\tWait for the adding process to end.\n8)\tSuccessful adding will be confirmed by the Z-Wave controller’s message and 3 short beeps.",
            name: "InclusionDescription",
          },
          {
            text:
              "The Swipe needs to be woken up to receive information about the new configuration from the Z-Wave controller, like parameters and associations. Use 1st menu position to wake up the device or click the button on the back of the device once.\n\n1)\tMove and hold your hand close to the center of the pad.\n2)\tLoud sound sequence will confirm entering the menu, keep holding your hand.\n3)\tWait for the buzzer to indicate the 1st menu position (1 short beep)\n4)\tWithdraw the hand and perform swiping up gesture to confirm selection (two beeps will confirm validity).",
            name: "WakeupDescription",
          },
          {
            text:
              'Reset procedure allows to restore the device back to its factory settings, which means all information about the Z-Wave controller and user configuration will be deleted. In order to reset the device:\n1)\tMake sure the device is powered.\n2)\tMove and hold your hand close to the center of the pad.\n3)\tLoud sound sequence will confirm entering the menu, keep holding your hand.\n4)\tWait for the buzzer to indicate the 3rd menu position (3 short beeps)\n5)\tWithdraw the hand and perform swiping up gesture to confirm selection (two beeps will confirm validity).\nResetting the device is not the recommended way of removing the device from the\nZ-Wave network. Use the reset procedure only if the primary controller is missing\nor inoperable. Certain device removal can be achieved by the procedure of removing\ndescribed in "Adding the device" on page 8.',
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1745/FGGC-001-US-T-v1.0.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1)\tPlace the Swipe within the direct range of your Z-Wave controller.\n2)\tSet the main controller in remove mode (see the controller’s manual).\n3)\tMove and hold your hand close to the centre of the pad.\n4)\tIf the device is battery powered, high pitched beep will signal exiting the Standby Mode.\n5)\tLoud sound sequence will confirm entering the menu, keep holding your hand.\n6)\tAfter hearing two short beeps (green indicator colour), withdraw the hand and perform swiping up gesture to confirm selection (two beeps will confirm validity).\n7)\tWait for the removing process to end.\n8)\tSuccessful removing will be confirmed by the Z-Wave controller’s message and sequence of 2 short beeps, pause, 1 short beep.",
            name: "ExclusionDescription",
          },
          {
            text:
              "FIBARO Swipe is a revolutionary, battery-powered gesture control pad that allows you to control devices through the Z-Wave network. Swipe your hand up, down, left or right in front of the pad, make circular gestures and use sequences of gestures to get full and intuitive control of your smart home.\nInstalled device perfectly matches your interior design, as it resembles a picture frame. You can even personalize it with your favourite picture. Gesture controlled menu allow to add/remove or reset the device without dismounting it. \nThe device is equipped with a buzzer that confirms performed gestures and other actions.",
            name: "Description",
          },
          { text: "FGGC-001", id: "1000", name: "Identifier", type: "0D01" },
          { text: "FIBARO Swipe", name: "Name" },
          {
            text: "https://products.z-wavealliance.org/products/1745/",
            id: "2000",
            name: "ZWProductPage",
            type: "0D01",
          },
          { text: "FGGC-001", id: "2000", name: "Identifier", type: "0D01" },
          {
            text: "U.S. / Canada / Mexico",
            id: "2000",
            name: "FrequencyName",
            type: "0D01",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1655/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1745/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 3,
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
            label: "Device orientation",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                Parameter determines orientation of the Swipe in relation to its default position.\n                Required for proper gestures recognition.\n            ",
            Item: [
              { label: "Default orientation", value: "0" },
              { label: "180 rotation", value: "1" },
              { label: "90 clockwise rotation", value: "2" },
              { label: "90 counter-clockwise rotation", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Buzzer",
            size: "1",
            type: "list",
            value: "1",
            Help: "Acoustic signalling of gestures detection.",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "LED diode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Visual indication of gestures detection",
            Item: [
              { label: "Disabled", value: "0" },
              { label: "Enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Buzzer signalling result of gesture recognition",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "\n                Acoustic signalling of gesture recognition result (using the built-in buzzer).\n                Note: Parameter 4 is relevant only if parameter 2 is set to Enabled.\n            ",
            Item: [
              { label: "On successful recognition", value: "1" },
              { label: "On failed recognition", value: "2" },
              {
                label: "Successful and failed recognition is signalled",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Powering mode - interval of updating the current mode",
            max: "1080",
            min: "0",
            size: "2",
            type: "short",
            units: "minutes",
            value: "4",
            Help:
              "\n                This parameter determines how often the device checks if the USB power supply is connected and updates powering mode if needed.\n                0 - powering mode is not updated\n                1-1080 (in minutes) - time interval\n                Default : (4 minutes)\n            ",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Power saving mode (battery mode)",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                This parameter determines operation of gesture detection when battery powered.\n                When Standby Mode is selected, hold gesture must be performed to exit power saving mode and reactivate normal gesture recognition.\n                The device in Standby Mode consumes the least battery life.\n                When Simple Mode mode is selected, gesture recognition is always active, but only slowly performed gestures will be recognized properly (high battery consumption).\n            ",
            Item: [
              { label: "Standby Mode", value: "0" },
              { label: "Simple Mode", value: "1" },
              {
                label: "The Swipe does not enter power saving mode",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Hold gesture to enter the menu",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter allows to choose if the menu can be entered using the Hold gesture",
            Item: [
              { label: "Enabled", value: "0" },
              { label: "Disabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Scenes sent to the controller",
            size: "1",
            type: "byte",
            value: "15",
            Help:
              "\n                Defines which actions result in sending scenes to 1st Lifeline group\n                1 - scenes for Flick UP gesture enabled\n                2 - scenes for Flick DOWN gesture enabled\n                4 - scenes for Flick LEFT gesture enabled\n                8 - scenes for Flick RIGHT gesture enabled\n                16 - scenes for clockwise circular gesture enabled\n                32 - scenes for counter-clockwise circular gesture enabled\n                Default setting: 15\n            ",
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Associations in Z-Wave network security mode",
            size: "1",
            type: "byte",
            value: "31",
            Help:
              "\n                Parameter defines how commands are sent in specified association groups: as secure or non-secure.\n                Parameter is active only in Z-Wave network security mode.\n                It does not apply to 1st Lifeline association group.\n                1 - 2nd group Flick UP sent as secure\n                2 - 3rd group Flick DOWN sent as secure\n                4 - 4th group Flick LEFT sent as secure\n                8 - 5th group Flick RIGHT sent as secure\n                16 - 6th group Circular AirWheel sent as secure\n                Default setting: 31\n            ",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Control mode of 2nd-5th association groups and scenes",
            size: "1",
            type: "byte",
            value: "15",
            Help:
              "\n                Parameter allows to choose control mode for 2nd-5th groups and scenes.\n                By default, Toggle Mode is active, meaning that a single flick turns ON\n                the group and the same flick turns it OFF, doubled flicks are inactive.\n                After disabling Toggle Mode a single flick will turn the device ON and the same flick doubled will turn it OFF.\n                1 - Toggle Mode enabled for 2nd association group\n                2 - Toggle Mode enabled for 3rd association group\n                4 - Toggle Mode enabled for 4th association group\n                8 - Toggle Mode enabled for 5th association group\n                Default setting: 15\n            ",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Rate of smooth level control",
            size: "2",
            type: "short",
            value: "255",
            Help:
              "\n                Parameter allows to choose how long the hand has to be held near the center of the pad after AirWheel gesture for the associated devices to reach their maximum/minimum level.\n                0-10 - duration in seconds\n                255 - default settings of controlled devices\n            ",
          },
          {
            genre: "config",
            index: "20",
            instance: "1",
            label: "Switch ON control frame value for Flick UP gesture",
            size: "2",
            type: "short",
            value: "255",
            Help:
              "\n                This parameter allows to set value sent in switch ON command frame to the association group.\n                0-99 or 255\n            ",
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "Switch OFF control frame value for Flick UP gesture",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n                This parameter allows to set value sent in switch OFF command frame to the association group.\n                0-99 or 255\n            ",
          },
          {
            genre: "config",
            index: "22",
            instance: "1",
            label: "Switch ON control frame value for Flick DOWN gesture",
            size: "2",
            type: "short",
            value: "255",
            Help:
              "\n                This parameter allows to set value sent in switch ON command frame to the association group.\n                0-99 or 255\n            ",
          },
          {
            genre: "config",
            index: "23",
            instance: "1",
            label: "Switch OFF control frame value for Flick DOWN gesture",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n                This parameter allows to set value sent in switch OFF command frame to the association group.\n                0-99 or 255\n            ",
          },
          {
            genre: "config",
            index: "24",
            instance: "1",
            label: "Switch ON control frame value for Flick LEFT gesture",
            size: "2",
            type: "short",
            value: "255",
            Help:
              "\n                This parameter allows to set value sent in switch ON command frame to the association group.\n                0-99 or 255\n            ",
          },
          {
            genre: "config",
            index: "25",
            instance: "1",
            label: "Switch OFF control frame value for Flick LEFT gesture",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n                This parameter allows to set value sent in switch OFF command frame to the association group.\n                0-99 or 255\n            ",
          },
          {
            genre: "config",
            index: "26",
            instance: "1",
            label: "Switch ON control frame value for Flick RIGHT gesture",
            size: "2",
            type: "short",
            value: "255",
            Help:
              "\n                This parameter allows to set value sent in switch ON command frame to the association group.\n                0-99 or 255\n            ",
          },
          {
            genre: "config",
            index: "27",
            instance: "1",
            label: "Switch OFF control frame value for Flick RIGHT gesture",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n                This parameter allows to set value sent in switch OFF command frame to the association group.\n                0-99 or 255\n            ",
          },
          {
            genre: "config",
            index: "30",
            instance: "1",
            label: "Sequence learning mode",
            max: "6",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "\n                Parameter activated by the main Z-Wave controller.\n                Change its value to launch sequence learning procedure for the desired slot.\n                0 - learning mode disabled\n                1-6 - launch sequence learning for selected slot\n            ",
          },
          {
            genre: "config",
            index: "31",
            instance: "1",
            label: "1st gestures sequence (SLOT 1)",
            max: "1076",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n                Value containing sequence of gestures. See Sequences of gestures on page 12 for more information.\n            ",
          },
          {
            genre: "config",
            index: "32",
            instance: "1",
            label: "2nd gestures sequence (SLOT 2)",
            max: "1076",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n                Value containing sequence of gestures. See Sequences of gestures on page 12 for more information.\n            ",
          },
          {
            genre: "config",
            index: "33",
            instance: "1",
            label: "3rd gestures sequence (SLOT 3)",
            max: "1076",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n                Value containing sequence of gestures. See Sequences of gestures on page 12 for more information.\n            ",
          },
          {
            genre: "config",
            index: "34",
            instance: "1",
            label: "4th gestures sequence (SLOT 4)",
            max: "1076",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n                Value containing sequence of gestures. See Sequences of gestures on page 12 for more information.\n            ",
          },
          {
            genre: "config",
            index: "35",
            instance: "1",
            label: "5th gestures sequence (SLOT 5)",
            max: "1076",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n                Value containing sequence of gestures. See Sequences of gestures on page 12 for more information.\n            ",
          },
          {
            genre: "config",
            index: "36",
            instance: "1",
            label: "6th gestures sequence (SLOT 6)",
            max: "1076",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help:
              "\n                Value containing sequence of gestures. See Sequences of gestures on page 12 for more information.\n            ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "6",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Flick UP", max_associations: "5" },
              { index: "3", label: "Flick DOWN", max_associations: "5" },
              { index: "4", label: "Flick LEFT", max_associations: "5" },
              { index: "5", label: "Flick RIGHT", max_associations: "5" },
              { index: "6", label: "Circular AirWheel", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
