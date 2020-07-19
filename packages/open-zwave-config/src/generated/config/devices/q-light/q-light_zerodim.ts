import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0433:000D:0003",
            name: "OzwInfoPage",
          },
          { text: "images/q-light/q-light_zerodim.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3775",
            id: "000D",
            name: "ZWProductPage",
            type: "0003",
          },
          { text: "Zerodim", id: "000D", name: "Identifier", type: "0003" },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=product_documents/3775/Instructions_ZerodimZwave_Norsk_A4.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Zerodim Z-Wave by Q-light is a wireless smart home device.\r\nFeatures:\r\n- 0-99% dimming range\r\n- 2-180W LED load\r\n- Compatible with any Z-Wave or Z-Wave Plus Controller\r\n- There is memorized function at power off\r\n- OverLoad protection\r\n- Soft start function\r\n- SmartStart\r\n- This device is a security enable Z-Wave Plus product that is able to use encrypted Z-Wave Plus messages to communicate to other security enable Z-Wave Plus products.",
            name: "Description",
          },
          {
            text:
              "1. Place the Zerodim Z-Wave within the direct range of your Z-Wave controller.\r\n2. Identify switch rotary knob (turns the light on).\r\n3. Set the main controller in (security/non-security) add mode (see the controller’s manual).\r\n4. Quickly, three times press switch rotary knob.\r\n5. Wait for the removing process to end.\r\n6. Successful removing will be confirmed by the Z-Wave controller’s message.",
            name: "ExclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "000D",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "Q-light Zerodim Z-Wave", name: "Name" },
          {
            text:
              "Resetting the Zerodim Z-Wave:\r\n1. Quickly, nine times press switch rotary knob.\r\n2. Wait for the resetting process to end, the lamp will be set to maximum brightness.\r\n\r\nDevice reset statues: Turn on the light at maximum brightness.",
            name: "ResetDescription",
          },
          {
            text:
              "Classic Learn Mode:\r\n1. Place the Zerodim Z-Wave within the direct range of your Z-Wave controller.\r\n2. Identify switch rotary knob (turns the light on).\r\n3. Set the main controller in (security/non-security) add mode (see the controller’s manual).\r\n4. Quickly, three times press switch rotary knob.\r\n5. Wait for the adding process to end.\r\n6. Successful adding will be confirmed by the Z-Wave controller’s message.\r\n\r\nSmartStart Learn Mode:\r\n1. Scanning the Z-Wave QR Code present on the product with a controller providing SmartStart inclusion.\r\n2. No further action is required and the SmartStart product will be added automaticall within 10 minutes of being switched on in the network vicinity.\r\n3. The QR Code and DSK are attached to the back of the product case, as shown below:",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial release",
                author: "Geir Råness - git@winning.no",
                date: "03 July 2020",
                revision: 1,
              },
              {
                text: "fix associations",
                author: "Geir Råness - git@winning.no",
                date: "06 July 2020",
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
            instance: "1",
            index: "1",
            value: "10",
            label: "Minimum brightness level",
            units: "%",
            size: "1",
            min: "1",
            max: "98",
            type: "byte",
            Help:
              "\r\nSet the desired value from 1 to 98% for the minimum dim level that the dimmer is restricted to, the dimmer will not go lower than the value set here.\r\n\t  ",
          },
          {
            genre: "config",
            instance: "1",
            index: "2",
            value: "99",
            label: "Maximum brightness level",
            units: "%",
            size: "1",
            min: "2",
            max: "99",
            type: "byte",
            Help:
              "\r\nSet the desired value from 2 to 99% for the maximum dim level that the dimmer is restricted to; the dimmer will not go higher than the value set here.\r\n\t  ",
          },
          {
            genre: "config",
            instance: "1",
            index: "3",
            value: "1",
            label: "Automatic control - dimming step size",
            units: "%",
            size: "1",
            min: "1",
            max: "99",
            type: "byte",
            Help:
              "\r\nThis parameter defines the percentage value of dimming step during the automatic control.\r\n\t  ",
          },
          {
            genre: "config",
            instance: "1",
            index: "4",
            value: "1",
            label: "Automatic control - time of a dimming step",
            units: "ms",
            size: "1",
            min: "1",
            max: "255",
            type: "byte",
            Help:
              "\r\nThis parameter defines the time of single dimming step set in parameter 3 during the automatic control.\r\n\t  ",
          },
          {
            genre: "config",
            instance: "1",
            index: "5",
            value: "1",
            label: "Manual control - dimming step size",
            units: "step",
            size: "1",
            min: "1",
            max: "99",
            type: "byte",
            Help:
              "\r\nThis parameter defines the percentage value of dimming step during the manual control.\r\n\t  ",
          },
          {
            genre: "config",
            instance: "1",
            index: "6",
            value: "5",
            label: "Manual control - time of a dimming step",
            units: "ms",
            size: "1",
            min: "1",
            max: "255",
            type: "byte",
            Help:
              "\r\nThis parameter defines the time of single dimming step setin parameter 5 during the manual control.\t  \r\n\t  ",
          },
          {
            genre: "config",
            instance: "1",
            index: "7",
            value: "1",
            label: "Memory function after power failure",
            size: "1",
            min: "0",
            max: "1",
            type: "list",
            Help:
              "Set the desired value from 0 to 1 to turn on/off the memory function.Setting this value to 0 turns off the dimmer's Memory fucntion.Setting this value to 1 truns on the dimmer's Memory function.",
            Item: [
              {
                value: "0",
                label:
                  "Device does not save the state before a power failure, it returns to off position",
              },
              {
                value: "1",
                label: "Device restores it's state before power failure",
              },
            ],
          },
          {
            genre: "config",
            instance: "1",
            index: "8",
            value: "1",
            label: "Scene ID set",
            units: "step",
            size: "1",
            min: "1",
            max: "255",
            type: "byte",
            Help:
              "\r\nScene ID is set by this configuration.\r\n\r\nNote: The actual action of each SCENE ID are set by\r\nSCENE_ACTUATOR_CONF(0x26) command.\r\n\t  ",
          },
          {
            genre: "config",
            instance: "1",
            index: "9",
            value: "0",
            label: "Timer functionality (auto - off)",
            units: "seconds",
            size: "2",
            min: "0",
            max: "32767",
            type: "short",
            Help:
              "\r\nThis parameter allows to automatically switch off the device after specified time from switching on the light source. It may be useful when the Zerodim Z-Wave is installed in the stairway.\r\n\r\nAvailable settings: \r\n0 - Function disabled. \r\n1-32767 - time to turn off measured in seconds (1s-9.1h)\r\n    ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              {
                index: "2",
                label: "On/Off (rotary nob) / Mirror of endpoint 1, group 2",
                max_associations: "5",
              },
              {
                index: "3",
                label: "Dimmer (rotary nob) / Mirror of endpoint 1, group 3",
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
