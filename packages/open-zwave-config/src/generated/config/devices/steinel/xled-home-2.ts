import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0271:1A73:0001",
            name: "OzwInfoPage",
          },
          { text: "images/steinel/xled-home-2.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2290/",
            id: "1A73",
            name: "ZWProductPage",
            type: "0001",
          },
          { text: "XLED home 2 Z-Wave", name: "Name" },
          { text: "50111677101", id: "1A73", name: "Identifier", type: "0001" },
          {
            text:
              "The moveable sensor-switched outdoor floodlight with fully swivelling LED panel in a classy opal look. The XLED home 2 sensor-switched floodlight comes in a sophisticated design. It is not just an eye-catcher, but also a truly talented mover. Thanks to the fully swiveling LED panel, every corner of the entrance area can be illuminated flexibly and as required. The highly efficient LED technology coupled with the opal cover provides maximum lighting comfort. As an individual floodlight or interconnected with the slave version, the innovative new generation of the XLED home success series is available in white, black, graphite and silver.\n\nSmart home included.\nThe optional Smart Friends Box and the free Smart Friends app make it easy to set the XLED home 2 Z-Wave via smart phone or tablet. The floodlight can also be switched ON or OFF via app. Other Steinel products can also be interconnected. If you wish, this also works via remote control when you are out. That completes your own light management system.\nAlong with STEINEL products, Smart Friends solutions from PAULMANN, SCHELLENBERG and ABUS can also integrated. Smart homes from a brand-name provider.",
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "1A73",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text:
              'To put the device into inclusion mode, turn the device\'s control dial (F) to "Set" and back to "0" within 5 seconds. The status LED (G) lights up to show that this mode is selected.\n\n\nAdding XLED home 2 to the Smart Friends system:\n1) Download the Smart Friends app from the app store.\n2) In the rooms view, activate the edit mode.\n3) Select the chosen room and press the "Add device" button.\n4) To put the device into inclusion mode, turn the device\'s control dial (F) to "Set" and back to "0" within 5 seconds. The status LED (G) lights up to show that this mode is selected.\n5) The app displays a confirmation message once inclusion has been successfully completed.',
            name: "InclusionDescription",
          },
          {
            text:
              'Resetting XLED home 2 to factory settings:\n\nPlease use this procedure only when the network primary controller is missing or otherwise inoperable.\n\n1) Turn the device\'s control dial (F) to "Set" and move it to "Reset" within 5 seconds.\n2) The status LED (G) briefly flashes to show that the light has been reset.\n3) The device is now no longer included in the Z-Wave system and has been returned to factory settings.',
            name: "ResetDescription",
          },
          {
            text:
              'To put the device into exclusion mode, turn the device\'s control dial (F) to "Set" and back to "0" within 5 seconds. The red status LED (G) lights up to show that this mode is selected.\n\n\nRemoving XLED home 2 from the Smart Friends system:\n1) In the rooms view, activate the edit mode.\n2) Select the device in the chosen room and press the "delete" button. Press delete and follow the instructions in the app.\n3) To put the device into exclusion mode, turn the device\'s control dial (F) to "Set" and back to "0" within 5 seconds. The red status LED (G) lights up to show that this mode is selected.\n4) The app displays a confirmation message once exclusion has been successfully completed.',
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2290/XLEDhome2Z-Wave_5spr_110050436_11.04.17.LowRes.pdf",
            name: "ProductManual",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2290/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
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
            label: "Duration of light after motion detection",
            max: "900",
            min: "5",
            size: "2",
            type: "short",
            units: "seconds",
            value: "180",
            Help:
              "\n                Available settings: 5-900 seconds.\n            ",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Light threshold",
            max: "2000",
            min: "0",
            size: "2",
            type: "short",
            units: "lx",
            value: "2000",
            Help:
              "\n                2000 - is used as daylight (always night mode).\n                0 - run Learn ambient light sequence. 2-1999 lux.\n            ",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Sensitivity",
            max: "100",
            min: "2",
            size: "1",
            type: "byte",
            units: "%",
            value: "100",
            Help:
              "\n                Potentiometer State.\n                Available settings: 2-100%.\n            ",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Brightness measuring interval",
            max: "120",
            min: "0",
            size: "1",
            type: "byte",
            units: "minutes",
            value: "0",
            Help:
              "\n                Available settings: 0,5-120.\n                Interval for ambient light measuring when lamp is on (lamp switches off shortly and measures).\n                0 - function is off.\n            ",
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Global Light",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help: "External ambient light value.",
            Item: [
              { label: "Enable", value: "0" },
              { label: "Disable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Slave Mode",
            max: "4",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "2",
            Help: "Disable local control.",
            Item: [
              { label: "Normal mode", value: "0" },
              { label: "Slave mode without gateway checking", value: "1" },
              {
                label: "Normal mode with lifeline error signalisation",
                value: "2",
              },
              { label: "Slave mode with gateway checking", value: "3" },
              { label: "Stupid mode - lamp permanently on", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Off behaviour",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            units: "",
            value: "10",
            Help:
              "\n                Off behaviour (timeout).\n                Available settings: 0-209,255.\n                0 - Lamp is switched off and remains so until any new motion event (local or remote) is received.\n                1 to 100 (Default) timeout: 1 second (1) to 100 seconds (100) in 1-second resolution.\n                101 to 200 timeout: 1 minute (101) to 100 minutes (200) 1-minute resolution.\n                201 to 209 timeout: 1 hour (201) to 9 hours (209) in 1-hour resolution.\n                255 Lamp is switched off for TIME (cfg 1).\n                It does not wait for a motion event and works normally via current motion evaluation.\n            ",
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "On behaviour",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            units: "",
            value: "255",
            Help:
              "\n                On behaviour (timeout).\n                Similar than Off behaviour.\n                Available settings: 0-209,255.\n                0 - Lamp is switched on and remains so until any new motion event (local or remote) is received. It then works normally via current motion evaluation.\n                Notice - during the day, this mode cannot be ended remotely due to motion events not being transmitted - only via local motion sensor if enabled.\n                1 to 100 timeout: 1 second (1) to 100 seconds (100) in 1-second resolution.\n                101 to 200 timeout: 1 minute (101) to 100 minutes (200) 1-minute resolution.\n                201 to 209 timeout: 1 hour (201) to 9 hours (209) in 1-hour resolution.\n                Notice - during the day, this mode cannot be ended remotely due to motion events not being transmitted - only via local motion sensor if enabled.\n                255 Lamp is switched on for TIME (cfg 1). It does not wait for a motion event and works normally via current motion evaluation.\n            ",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "On behaviour time over",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            units: "",
            value: "204",
            Help:
              "\n                On behaviour time over (timeout).\n                Available settings: 0-209,255.\n                0 No additional waiting for motion.\n                1 to 100 timeout: 1 second (1) to 100 seconds (100) in 1-second resolution.\n                101 to 200 timeout: 1 minute (101) to 100 minutes (200) 1-minute resolution.\n                201 to 209 (Default) timeout: 1 hour (201) to 9 hours (209) in 1-hour resolution.\n                255 Never stop waiting before motion.\n            ",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Sequence On-Off behaviour",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            units: "",
            value: "204",
            Help:
              "\n                Available settings: 0-209,255.\n                0 - Lamp is switched off and remains so until any new motion event (local or remote) is received.\n                1 to 100 timeout: 1 second (1) to 100 seconds (100) in 1-second resolution.\n                101 to 200 timeout: 1 minute (101) to 100 minutes (200) 1-minute resolution.\n                201 to 209 (Default) timeout: 1 hour (201) to 9 hours (209) in 1-hour resolution.\n                255 device ignores ON - OFF sequence and uses OFF behavior.\n            ",
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Sequence Off-On behaviour",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            units: "",
            value: "204",
            Help:
              "\n                Available settings: 0-209,255.\n                0 - Lamp is switched on and remains so until any new motion event (local or remote) is received.\n                It then works normally via current motion evaluation.\n                Notice - during the day, this mode cannot be ended remotely due to motion events not being transmitted - only via local motion sensor if enabled.\n                1 to 100 timeout: 1 second (1) to 100 seconds (100) in 1-second resolution.\n                101 to 200 timeout: 1 minute (101) to 100 minutes (200) 1-minute resolution.\n                201 to 209 (Default) timeout: 1 hour (201) to 9 hours (209) in 1-hour resolution.\n                255 device ignores OFF - ON sequence and uses ON behaviour.\n            ",
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Sequence timing",
            max: "50",
            min: "10",
            size: "1",
            type: "byte",
            units: "",
            value: "10",
            Help:
              "\n                Available settings: 10-50.\n                Time in [100 miliseconds] of maximum delay between BASIC ON and BASIC OFF (and vice versa) to consider this as a sequence.\n                It is typically 1 second, but can be exceptionally longer due to retransmissions and overload - in this case, a longer interval can be allowed (up to 5 seconds).\n            ",
          },
          {
            genre: "config",
            index: "16",
            instance: "1",
            label: "Motion Off behaviour",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            units: "",
            value: "0",
            Help:
              "\n                Available settings: 0-209,255.\n                0 (Default) BASIC SET to Motion sensor endpoint ignored, BASIC to root is mapped to relay endpoint, motion sensor still enabled.\n                1 to 100 timeout: 1 second (1) to 100 seconds (100) in 1-second resolution.\n                101 to 200 timeout: 1 minute (101) to 100 minutes (200) 1-minute resolution.\n                201 to 209 timeout: 1 hour (201) to 9 hours (209) in 1-hour resolution.\n                255 BASIC SET to Motion sensor endpoint ignored, BASIC to root is mapped to relay endpoint, motion sensor still disabled\n            ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "On/Off Control", max_associations: "16" },
              {
                index: "3",
                label: "Notification Report",
                max_associations: "16",
              },
              { index: "4", label: "Ambient light", max_associations: "16" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
