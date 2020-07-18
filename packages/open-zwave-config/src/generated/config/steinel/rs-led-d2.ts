import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0271:1A74:0001",
            name: "OzwInfoPage",
          },
          { text: "images/steinel/rs-led-d2.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2243/",
            id: "1A74",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text:
              'Exclusion: Remove\n\nRemoving RS LED D2 from the Smart Friends system:\n1 In the rooms view, activate the edit mode.\n2. Select the device in the chosen room and press the "delete" button. Press delete and follow the instructions in the app.\n3 Briefly press button e on the device to set it to exclusion mode. The red status LED h lights up to show that this mode is selected.\n4 The app displays a confirmation message once exclusion has been successfully completed.',
            name: "ExclusionDescription",
          },
          {
            text:
              "Sleek, attractive lines. Opting for the RS LED D2 designer indoor luminaire, you'll be giving your home a real designer highlight with pleasant LED illumination. With its stunning looks and intelligent technology, this light provides the last word in stylish home convenience. Once fitted to the wall or ceiling, the high-frequency sensor switches it 'ON' and 'OFF' in complete silence and all automatically. The light is child's play to install and the function settings on the product are easy to understand too. Your neighbours will be amazed.\n\nSmart home included.\nThe optional Smart Friends Box and the free Smart Friends app make it easy to set the RS PRO LED D2 Z-Wave via smart phone or tablet. The light can also be switched ON or OFF via app. Other Steinel products can also be interconnected. If you wish, this also works via remote control when you are out. That completes your own light management system.\nAlong with STEINEL products, Smart Friends solutions from PAULMANN, SCHELLENBERG and ABUS can also integrated. Smart homes from a brand-name provider.",
            name: "Description",
          },
          { text: "6772", id: "1A74", name: "Identifier", type: "0001" },
          { text: "RS LED D2 Z-Wave", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "1A74",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text:
              "Returning RS LED D2 to factory settings:\nPlease use this procedure only when the network primary controller is missing or otherwise inoperable.\n1 Briefly press button e and directly afterwards keep it pressed for 5 seconds.\n2 Status LED h briefly flashes to show that the light has been reset.\n3 The device is now no longer included in the Z-Wave system and has been returned to factory settings.",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2243/RSLEDD2Z-Wave_5spr_110054844_11.04.17.pdf",
            name: "ProductManual",
          },
          {
            text:
              'Inclusion: Add\n\nAdding RS LED D2 to the Smart Friends system:\n1 Download Smart Friends app from the app store.\n2 In the rooms view, activate the edit mode.\n3 Select the chosen room and press the "Add device" button.\n4 Briefly press button 5 on the device to set it to inclusion mode. Status LED 8 lights up to show that this mode is selected.\n5 The app displays a confirmation message once inclusion has been successfully completed.',
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2243/xml",
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
            label: "Light duration",
            max: "900",
            min: "5",
            size: "2",
            type: "short",
            units: "seconds",
            value: "180",
            Help:
              "\n\t\t\t\tDuration of light after motion detection in seconds.\n\t\t\t",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Light threshold [lx]",
            max: "2000",
            min: "2",
            size: "2",
            type: "short",
            units: "",
            value: "2000",
            Help:
              "\n\t\t\t\t0 - run Learn ambient light sequence.\n\t\t\t\t2000 - is used as daylight (always night mode).\n\t\t\t\tValue can also be controlled via potentiometer - potentiometer value is used as the default value.\n\t\t\t",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Motion Radar Sensitivity [%]",
            max: "100",
            min: "2",
            size: "1",
            type: "byte",
            units: "",
            value: "100",
            Help:
              "\n\t\t\t\tAdjust motion sensitivity from 2-100.\n\t\t\t\tValue can also be controlled via potentiometer. Potentiometer value is used as the default value and any potentiometer movement rewrites\n\t\t\t\tthe current setting.\n\t\t\t",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Brightness measuring interval [min]",
            max: "120",
            min: "5",
            size: "1",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n\t\t\t\tInterval for ambient light measuring when lamp is on ( lamp switches off shortly and measures ). Range 5-120 0=function is off.\n\t\t\t",
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Use external Ambient Light value",
            max: "1",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "\n\t\t\t\tWhen GLOBAL_LIGHT mode is ON - device overrides its own light sensor values and uses Light report values from any Z-Wave light sensor instead - this has to be configured appropriately to send light\n\t\t\t\tautomatically.\n\t\t\t\tIf the last remote light level value is older than 30 minutes, the internal light value is used again until the next external value is received.\n\t\t\t",
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
            units: "",
            value: "2",
            Help:
              "\n\t\t\tDisable local control.\n\t\t\tLamp stops using it's own motion sensor in Slave and Stupid mode.\n\t\t\t",
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
            max: "209",
            min: "0",
            size: "2",
            type: "short",
            units: "",
            value: "10",
            Help:
              "\n                0 - Lamp is switched off and remains so until any new motion event (local or remote) is received.\n                1 to 100 (Default) timeout: 1 second (1) to 100 seconds (100) in 1-second resolution.\n                101 to 200 timeout: 1 minute (101) to 100 minutes (200) 1-minute resolution.\n                201 to 209 timeout: 1 hour (201) to 9 hours (209) in 1-hour resolution.\n                255 Lamp is switched off for TIME (cfg 1).\n                It does not wait for a motion event and works normally via current motion evaluation.\n\t\t\t",
            Item: [
              {
                label: "Lamp/relay is switched off for TIME (cfg 1)",
                value: "255",
              },
            ],
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "On behaviour (timeout)",
            max: "209",
            min: "2",
            size: "2",
            type: "short",
            units: "",
            value: "255",
            Help:
              "\n                Similar than Off behaviour.\n                Available settings: 0-255.\n                0 - Lamp is switched on and remains so until any new motion event (local or remote) is received.\n                It then works normally via current motion evaluation.\n                Notice - during the day, this mode cannot be ended remotely due to motion events not being transmitted only via local motion sensor if enabled.\n\t\t\t",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "On behaviour time over (timeout)",
            max: "209",
            min: "0",
            size: "2",
            type: "short",
            units: "",
            value: "204",
            Help:
              "\n                Available settings: 0-255.\n                0 No additional waiting for motion.\n                1 to 100 timeout: 1 second (1) to 100 seconds (100) in 1-second resolution.\n                101 to 200 timeout: 1 minute (101) to 100 minutes (200) 1-minute resolution.\n                201 to 209 (Default) timeout: 1 hour (201) to 9 hours (209) in 1-hour resolution.\n                255 Never stop waiting before motion.\n\t\t\t",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Sequence On-Off behaviour (timeout)",
            max: "209",
            min: "0",
            size: "2",
            type: "short",
            units: "",
            value: "204",
            Help:
              "\n                Available settings: 0-255.\n                0 - Lamp is switched off and remains so until any new motion event (local or remote) is received.\n                1 to 100 timeout: 1 second (1) to 100 seconds (100) in 1-second resolution.\n                101 to 200 timeout: 1 minute (101) to 100 minutes (200) 1-minute resolution.\n                201 to 209 (Default) timeout: 1 hour (201) to 9 hours (209) in 1-hour resolution.\n                255 device ignores ON - OFF sequence and uses OFF behavior.\n\t\t\t",
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Sequence Off-On behaviour (timeout)",
            max: "209",
            min: "0",
            size: "2",
            type: "short",
            units: "",
            value: "204",
            Help:
              "\n\t\t\t\tAvailable settings: 0-255.\n                0 - Lamp is switched on and remains so until any new motion event (local or remote) is received.\n                It then works normally via current motion evaluation.\n                Notice - during the day, this mode cannot be ended remotely due to motion events not being transmitted only via local motion sensor if enabled.\n                1 to 100 timeout: 1 second (1) to 100 seconds (100) in 1-second resolution.\n                101 to 200 timeout: 1 minute (101) to 100 minutes (200) 1-minute resolution.\n                201 to 209 (Default) timeout: 1 hour (201) to 9 hours (209) in 1-hour resolution.\n                255 device ignores OFF - ON sequence and uses ON behaviour.\n\t\t\t",
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
              "\n\t\t\t\tTime in [100 miliseconds] of maximum delay between BASIC ON and BASIC OFF (and vice versa) to consider this as a sequence.\n\t\t\t\tIt is typically 1 second, but can be exceptionally longer due to retransmissions and overload in this case, a longer interval can be allowed (up to 5 seconds ).\n\t\t\t",
          },
          {
            genre: "config",
            index: "16",
            instance: "1",
            label: "Motion Off behaviour (timeout)",
            max: "209",
            min: "2",
            size: "2",
            type: "short",
            units: "",
            value: "0",
            Help:
              "\n                Available settings: 0-255.\n                0 (Default) BASIC SET to Motion sensor endpoint ignored, BASIC to root is mapped to relay endpoint, motion sensor still enabled.\n                1 to 100 timeout: 1 second (1) to 100 seconds (100) in 1-second resolution.\n                101 to 200 timeout: 1 minute (101) to 100 minutes (200) 1-minute resolution.\n                201 to 209 timeout: 1 hour (201) to 9 hours (209) in 1-hour resolution.\n                255 BASIC SET to Motion sensor endpoint ignored, BASIC to root is mapped to relay endpoint, motion sensor still disabled\n\t\t\t",
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
              { index: "2", label: "Control: Key01", max_associations: "16" },
              {
                index: "3",
                label: "Motion Begin/End (PIR/radar/iHF)",
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
