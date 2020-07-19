import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0271:1A75:0001",
            name: "OzwInfoPage",
          },
          { text: "images/steinel/l810-led-ihf.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2309/",
            id: "1A75",
            name: "ZWProductPage",
            type: "0001",
          },
          { text: "50111677301", id: "1A75", name: "Identifier", type: "0001" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2309/110050438 BDAL L 810 LED IHF SMARTHOME D-GB-F-I-NL.pdf",
            name: "ProductManual",
          },
          {
            text:
              "A high-quality product is cleverly thought through and made from materials that last. Its value also extends beyond today, it has permanency and constancy. The L 810 iHF outdoor SensorLight is an LED uplight and downlight that translates intelligent technology into form and function. For the first time, we have managed to make a light's sensor completely invisible – without compromising on first-class design and technological perfection. For stunning upward and downward lighting. New: optional manual override for 4 hours.\n\nSmart home included.\nThe optional Smart Friends box and the free Smart Friends app make it easy to set the L 810 LED iHF Z-Wave via smart phone or tablet. The light can also be switched ON or OFF via app. Other Steinel products can also be interconnected. If you wish, this also works via remote control when you are out. That completes your own light management system.\nAlong with STEINEL products, Smart Friends solutions from PAULMANN, SCHELLENBERG and ABUS can also integrated. Smart homes from a brand-name provider.",
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "1A75",
            name: "FrequencyName",
            type: "0001",
          },
          { text: "L 810 LED iHF Z-Wave", name: "Name" },
          {
            text:
              "Inclusion = Add\nTo start the light's inclusion mode, briefly press button (8)\n\nAdding L 810 LED iHF to the Smart Friends system:\n1) Download Smart Friends app from the App Store.\n2) In the rooms view, activate the edit mode.\n3) Select the chosen room and press the \"Add device\" button.\n4) Briefly press the device's button (8) to set the light to inclusion mode. The status LED (12) lights up to show that this mode is selected.\n5) The app displays a confirmation message once inclusion has been successfully completed.",
            name: "InclusionDescription",
          },
          {
            text:
              "Returning L 810 LED iHF to factory settings:\n\nPlease only perform these steps if the main network controller is missing or not working for other reasons.\n\n1) Briefly press button (8) and directly afterwards keep it pressed for 5 seconds.\n2) Status LED (12) briefly flashes to show that the light has been reset.\n3) The device is now no longer included in the Z-Wave system and has been returned to factory settings.",
            name: "ResetDescription",
          },
          {
            text:
              "Exclusion = Remove\nTo start the light's exclusion mode, briefly press button (8)\n\nRemoving L 810 LED iHF from the Smart Friends system:\n1) In the rooms view, activate the edit mode.\n2) Select the device in the chosen room and press the \"delete\" button. Press delete and follow the instructions in the app.\n3) Briefly press the device's button (8) to set the light to exclusion mode. The red status LED (12) lights up to show that this mode is selected.\n4) The app displays a confirmation message once exclusion has been successfully completed.",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2309/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
            index: "BASIC",
            instance: "1",
            label: "Default light level",
            max: "99",
            min: "1",
            size: "1",
            type: "byte",
            units: "",
            value: "99",
            Help: "\n                Range: 1-99 (default: 99).\n            ",
          },
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
              "\n                Range: 5-900 (default: 180 seconds).\n            ",
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
              "\n            \tRange: 2-2000, 0 (default: 2000 lux / potentiometer state if present).\n                0      - run Learn ambient light sequence.\n                2-1999 - threshold [lux].\n                2000   - is used as daylight (always night mode).\n\n                Value can be controlled via potentiometer (if present on device)  - potentiometer value is then used as the default value and any potentiometer movement rewrites the current setting. \n            ",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Night dim mode and time",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "minutes",
            value: "0",
            Help:
              "\n            \tRange: 0-60, -1 (default: 0 / potentiometer state if present).\n                0        - off (dim = basic light completely disabled).\n                1-60     - time [minutes] (enabled in night mode, starts after lamp is switched off after motion detection).\n                255 (-1) - whole night (dim through the whole night when lamp is off).\n\n                Dim mode is also disabled when local control is disabled as well as in Slave imode. \n            ",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Motion Radar Range",
            max: "500",
            min: "100",
            size: "2",
            type: "short",
            units: "centimeters",
            value: "500",
            Help:
              "\n                Range: 100-500 (default: 500 cm / potentiometer state if present).\n\n                Value can be controlled via potentiometer (if present on device) - potentiometer value is then used as default value and any potentiometer movement rewrites the current setting.\n            ",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Motion Radar Sensitivity",
            max: "100",
            min: "2",
            size: "1",
            type: "byte",
            units: "%",
            value: "100",
            Help:
              "\n                Range: 2-100 (default: 100 % / potentiometer state if present).\n\n                Value can be controlled via potentiometer (if present on device) . potentiometer value is then used as the default value and any potentiometer movement rewrites the current setting.\n            ",
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
              "\n            \tRange: 5-120, 0 (default: 0, disabled).\n                5-120 - Interval for ambient light measuring when lamp is on (lamp switches off shortly and measures).\n                0     - function is off.\n            ",
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Use external Ambient Light valu",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "\n            \tRange: 0/1 (default: 1, disabled).\n\n                When GLOBAL_LIGHT mode is ON - device overrides its own light sensor values and uses Light Report values from any Z-Wave light sensor instead - this has to be configured appropriately to send light automatically. If the last remote light level value is older than 30 minutes, the internal light value is used again until the next external value is receive.\n            ",
            Item: [
              { label: "Enable", value: "0" },
              { label: "Disable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Disable local control",
            max: "4",
            min: "0",
            size: "1",
            type: "list",
            units: "bit field",
            value: "2",
            Help:
              '\n            \tRange: 0-4 (default: 2, Normal mode with lifeline error signalisation).\n                "Stupid mode" - lamp permanently on (bit 2 = 1):\n                  - has higher priority then slave mode.\n                  - lamp/relay is permanently on (for simple power wall switch controlling).\n\n                Slave mode without gateway checking (bit 0 = 1):\n                  - only if included in Z-Wave network.\n                  - useful for controlling via third-party sensor.\n                  - lamp/relay is directly controlled via Z-Wave, internal sensors are not used for controlling it.\n\n                Central unit checking (bit 1 = 1): (useful especially for controlling via gateway)\n                  When slave bit is 0:\n                    - device signalises fail of lifeline connection (if this bit is zero, fail of lifeline connection is not signalised).\n                  When slave bit is 1:\n                    - device checks presence of Z-Wave device in lifeline group (gateway). \n                      If it is not present for 2 minutes (testing repeatedly every 30 seconds) device switches to normal mode in the same way as after the end of local disabled mode (ON_BEHAVIOUR).\n                    - the device checks every 1 minute for recovery of lifeline connection.\n                    - if no lifeline specified - it works in normal mode.\n\n                Be careful with this option, device stops using its own motion sensor in Slave and "Stupid" mode.\n            ',
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
            label: "Off behaviour (timeout)",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            units: "",
            value: "10",
            Help:
              "\n                Behaviour after BASIC OFF (and similar commands). If a transition (even with zero change) with a non-default duration is to be processed, the transition cannot be interrupted by any motion event in any case.\n\n                Range: 0-209, 255 (default: 10 seconds).\n                0       - Lamp is switched off and remains so until any new motion event (local or remote) is received.\n                1-209   - Lamp/Relay is switched off and remains so until after a specified timeout once a new motion event (local or remote) is received.\n                          Timeout:\n                            1..100   - 1 second (1) to 100 seconds (100) in 1-second resolution.\n                            101..200 - 1 minute (101) to 100 minutes (200) 1-minute resolution.\n                            201..209 - 1 hour (201) to 9 hours (209) in 1-hour resolution.\n                210-254 - reserved.\n                255     - Lamp is switched off for TIME (cfg 1). It does not wait for a motion event and works normally via current motion evaluation.\n            ",
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "On behaviour (timeout)",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            units: "",
            value: "255",
            Help:
              "\n                Behaviour after BASIC ON (and similar commands). If a transition (even with zero change) with a non-default duration is to be processed, the transition cannot be interrupted by any motion event in any case.\n\n                Range: 0-209, 255 (default: 255).\n                0       - Lamp is switched on and remains so until any new motion event (local or remote) is received. It then works normally via current motion evaluation.\n                          Notice - during the day, this mode cannot be ended remotely due to motion events not being transmitted - only via local motion sensor if enabled.\n                1-209   - Lamp/relay is switched on and remains so until after a specified timeout once a new motion event (local or remote) is received.  It then works normally via current motion evaluation.\n                          Notice - during the day, this mode cannot be ended remotely due to motion events not being transmitted - only via local motion sensor if enabled.\n                          Timeout:\n                            1..100   - 1 second (1) to 100 seconds (100) in 1-second resolution.\n                            101..200 - 1 minute (101) to 100 minutes (200) 1-minute resolution.\n                            201..209 - 1 hour (201) to 9 hours (209) in 1-hour resolution.\n                210-254 - reserved\n                255     - Lamp is switched on for TIME (cfg 1). It does not wait for a motion event and works normally via current motion evaluation.\n            ",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "On behaviour time over (timeout)",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            units: "",
            value: "204",
            Help:
              "\n                Time limit to stop waiting for motion after timeout of ON_BEHAVIOUR or OFF_ON_BEHAVIOUR (0-209) to prevent staying ON forever when there is no motion. \n\n                Range: 0-209, 255 (default: 204, 4 hours).\n                0     - No additional waiting for motion.\n                1-209 - Timeout:\n                          1..100   - 1 second (1) to 100 seconds (100) in 1-second resolution.\n                          101..200 - 1 minute (101) to 100 minutes (200) 1-minute resolution.\n                          201..209 - 1 hour (201) to 9 hours (209) in 1-hour resolution.\n                255   - Never stop waiting before motion.\n            ",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Sequence On-Off behaviour (timeout)",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            units: "",
            value: "204",
            Help:
              "\n            \tBehaviour after a rapid sequence of BASIC ON and BASIC OFF commands. The intention is to use a much longer timeout value than the time after a single ON command which should then be followed by a short timeout value.\n\n                Range: 0-209,255 (default: 204, 4 hours).\n                0       - Lamp is switched off and remains so until any new motion event (local or remote) is received.\n                1-209   - Lamp/Relay is switched off and remains so until after a specified timeout once a new motion event (local or remote) is received.\n                          Timeout:\n                            1..100   - 1 second (1) to 100 seconds (100) in 1-second resolution.\n                            101..200 - 1 minute (101) to 100 minutes (200) 1-minute resolution.\n                            201..209 - 1 hour (201) to 9 hours (209) in 1-hour resolution.\n                210-254 - reserved.\n                255     - device ignores ON - OFF sequence and uses OFF behavior.\n            ",
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Sequence Off-On behaviour (timeout)",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            units: "",
            value: "204",
            Help:
              "\n            \tBehaviour after a rapid sequence of BASIC OFF and BASIC ON commands. The intention is to use a much longer timeout value than the time after a single OFF command which should then be followed by a short timeout value.\n\n                Range: 0-209, 255 (default: 204, 4 hours).\n                0       - Lamp is switched on and remains so until any new motion event (local or remote) is received. It then works normally via current motion evaluation.\n                          Notice - during the day, this mode cannot be ended remotely due to motion events not being transmitted - only via local motion sensor if enabled.\n                1-209   - Lamp/relay is switched on and remains so until after a specified timeout once a new motion event (local or remote) is received.  It then works normally via current motion evaluation.\n                          Notice - during the day, this mode cannot be ended remotely due to motion events not being transmitted - only via local motion sensor if enabled.\n                          Timeout:\n                            1..100   - 1 second (1) to 100 seconds (100) in 1-second resolution.\n                            101..200 - 1 minute (101) to 100 minutes (200) 1-minute resolution.\n                            201..209 - 1 hour (201) to 9 hours (209) in 1-hour resolution.\n                210-254 - reserved\n                255 device ignores OFF - ON sequence and uses ON behaviour.\n            ",
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
              "\n                Time in [100 miliseconds] of maximum delay between BASIC ON and BASIC OFF (and vice versa) to consider this as a sequence. It is typically 1 second, but can be exceptionally longer due to retransmissions and overload - in this case, a longer interval can be allowed (up to 5 seconds).\n\n                Range: 10-50 (default: 10, 1 scond).\n            ",
          },
          {
            genre: "config",
            index: "16",
            instance: "1",
            label: "Motion Off behaviour (timeout)",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            units: "",
            value: "0",
            Help:
              "\n            \tMotion disable timeout after BASIC SET to motion endpoint when the internal motion sensor is not used for evaluating the behaviour of the lamp. Events are, however, still transmitted to the Lifeline, and the device can be controlled via remote motion sensors.\n\n                Range: 0-209,255 (default: 0, disabled).\n                0       - BASIC SET to Motion sensor endpoint ignored, BASIC to root is mapped to relay endpoint, motion sensor still enabled.\n                1-209   - Internal motion sensor is disabled for specified timeout after BASIC SET 0x00 to motion endpoint.\n                          Timeout:\n                            1..100   - 1 second (1) to 100 seconds (100) in 1-second resolution.\n                            101..200 - 1 minute (101) to 100 minutes (200) 1-minute resolution.\n                            201..209 - 1 hour (201) to 9 hours (209) in 1-hour resolution.\n                210-254 - reserved.\n                255     - BASIC SET to Motion sensor endpoint ignored, BASIC to root is mapped to relay endpoint, motion sensor still disabled.\n            ",
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
              { index: "4", label: "Ambient light", max_associations: "15" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
