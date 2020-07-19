import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0258:0088:0003",
            name: "OzwInfoPage",
          },
          { text: "images/shenzen_neo/nas-ab01z.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1962/",
            id: "0088",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2171/Siren User Manual Common V3_2.pdf",
            name: "ProductManual",
          },
          {
            text:
              "You can press the button once to wake up the device and send wakeup notification to controller. If press successfully, the LED will blink one time",
            name: "WakeupDescription",
          },
          {
            text:
              "Loud alarm sound (up to 105dB) with flashing LED's when triggered.Mounts anywhere- it's wireless and 100% battery powered with 1-year battery life (2 CR123A Batteries Included).\n\n1.Make sounds and lighting when alarm is triggered\n\n2.Compatible with 300 series and 500 series.\n\n3.Range:Up to 50m outdoor :Up to 30m indoor\n \n4.Standby current :87uA\n\n5. Continuous work :1400 times",
            name: "Description",
          },
          {
            text:
              "1. Remove the siren cover.\n2. Make sure the siren is powered.\n3. Set Z‐Wave controller or Z‐Wave gateway into inclusion mode (Refer to the controller or\ngateway operating manual)\n4. Press the button three times within 1.5 second, the device will enter inclusion mode. And the\nLED will flash on and off alternately five times.\nNote: If siren has not been added to Z‐wave network, the siren will enter inclusion mode\nautomatically when it is powered on. You should let the controller enter into inclusion first\nbefore power on the siren in order to run this function.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Reset procedure will delete all information on the Z‐Wave network and Z‐Wave controller or\nZ‐Wave Gateway, and restore the siren to factory default settings.\n1. Remove the device cover.\n2. Make sure the siren is powered.\n3. Press and hold the button for 10 seconds, led will blink once.\n4. Release the button.\n\nNote: to use the reset procedure only when the primary controller is missing or inoperable.",
            name: "ResetDescription",
          },
          { text: "Siren Alarm", name: "Name" },
          {
            text:
              "In the front casing, there is button that is used to carry out include, exclude or reset factory\ndefault settings on PCB Board.\nWhen power is first supplied, the LED will flash on and off alternately at one second intervals\nwithin 5 seconds if the detector has not been added a Z‐Wave network. Please get familiar with\nthe terms below before starting the operations.\nThis product can be included and operated in any Z‐Wave network with other Z‐Wave certified\ndevices from other manufacturers and/or other applications. All non‐battery operated nodes\nwithin the network will act as repeaters regardless of vendor to increase reliability of the\nnetwork.",
            name: "InclusionDescription",
          },
          { text: "NAS-AB01Z", id: "0088", name: "Identifier", type: "0003" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0088",
            name: "FrequencyName",
            type: "0003",
          },
          {
            text: "https://products.z-wavealliance.org/products/2171/",
            id: "1088",
            name: "ZWProductPage",
            type: "0003",
          },
          { text: "NAS-AB01Z", id: "1088", name: "Identifier", type: "0003" },
          {
            text: "CEPT (Europe)",
            id: "1088",
            name: "FrequencyName",
            type: "0003",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1962/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2171/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 4,
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
            label: "Alarm Music Volume",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "\n                This parameter defines the output volume when siren plays door bell music.\n                Door Bell music volume is divided into 3 stages\n            ",
            Item: [
              { label: "Low", value: "1" },
              { label: "Middle", value: "2" },
              { label: "High", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Alarm Music Duration Time",
            max: "255",
            min: "1",
            size: "1",
            type: "list",
            value: "2",
            Help:
              "\n                This Parameter defines the alarm music duration time when siren receive an alarm sensor notification report or an alarm command from controller.\n                The duration time is divided into 5 stages.\n            ",
            Item: [
              { label: "Off", value: "0" },
              { label: "30 second", value: "1" },
              { label: "1 minute", value: "2" },
              { label: "5 minute", value: "3" },
              { label: "Always on", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Door Bell Music Duration Time",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "minute",
            value: "255",
            Help:
              "This parameter defines the door bell music duration time when siren receives a door/window sensor notification report or an alarm command (BASIC_SET = 0x02) from controller.\n                The door bell music will be played always if this parameter is set to 255.\n                The door bell music will not be  played if this parameter is set to 0.\n                Other values are the door bell music playing duration time.",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Door Bell Music Volume",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter defines the output volume when siren plays alarm music.\n                Door Bell music volume is divided into 3 stages",
            Item: [
              { label: "Low", value: "1" },
              { label: "Middle", value: "2" },
              { label: "High", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Alarm Music Index",
            max: "10",
            min: "1",
            size: "1",
            type: "list",
            value: "10",
            Help:
              "This parameter defines the alarm music index for siren play different music when alarm occurs.\n                There are 10 different music for user selection",
            Item: [
              { label: "Doorbell", value: "1" },
              { label: "Fur Elise", value: "2" },
              { label: "Doorbell Extended", value: "3" },
              { label: "Alert", value: "4" },
              { label: "William Tell", value: "5" },
              { label: "Rondo Alla Turca", value: "6" },
              { label: "Police Siren", value: "7" },
              { label: "Evacuation", value: "8" },
              { label: "Beep Beep", value: "9" },
              { label: "Beep", value: "10" },
            ],
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Door Bell Music Index",
            max: "10",
            min: "1",
            size: "1",
            type: "list",
            value: "9",
            Help:
              "This parameter defines the door bell music index for siren play different music when alarm occurs.\n                There are 10 different music for user selection.",
            Item: [
              { label: "Doorbell", value: "1" },
              { label: "Fur Elise", value: "2" },
              { label: "Doorbell Extended", value: "3" },
              { label: "Alert", value: "4" },
              { label: "William Tell", value: "5" },
              { label: "Rondo Alla Turca", value: "6" },
              { label: "Police Siren", value: "7" },
              { label: "Evacuation", value: "8" },
              { label: "Beep Beep", value: "9" },
              { label: "Beep", value: "10" },
            ],
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Configure Default Siren On Mode",
            max: "2",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter defines the default music index, volume and the duration time for 3 siren on.\n                This parameter can be selected between ALARM MUSIC and DOOR BELL MUSIC.\n                The settings for ALARM MUSIC MODE defines by Param #1, #2 and #5.\n                The settings for DOOR BELL MUSIC MODE defines by Param #3, #4 and #6",
            Item: [
              { label: "Alarm music", value: "1" },
              { label: "Door bell music", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Configure Alarm Led Enable",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "This parameter defines the default led enable status when siren is on for ALARM MUSIC MODE",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Door Bell Led Enable",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter defines the default led enable status when siren is on for DOOR BELL MUSIC MODE",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              {
                index: "2",
                label: "Send Binary Switch Report",
                max_associations: "5",
              },
              {
                index: "3",
                label: "Send Notification Report",
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
