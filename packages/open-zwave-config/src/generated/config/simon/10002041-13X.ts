import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Association LED",
            max: "1",
            min: "255",
            size: "1",
            type: "list",
            value: "1",
            Help: "Activates the Central LED.",
            Item: [
              { label: "Turns the center LED OFF", value: "0" },
              { label: "Turns the center LED ON", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Custom consumption limit",
            max: "65535",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "\n                Sets a delay from activation request until the activation is performed.\n                0 Disables custom consumption limit (Default).\n                1 to 65535 Sets the power in Watts that is supported (Once the load is over, it is disconnected).\n            ",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Beacon",
            max: "99",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "\n                Sets the beacon intensity, turning ON all Device LEDs al percentage set in this configuration.\n                0 Disables the beacon function (Defect).\n                1 to 99 (1-100%) sets the intensity of the beacon LEDs.\n            ",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Delay ON",
            max: "254",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "\n            This parameter allows to choose delay from activation request until load activation.\n            Value 0 Instantly (default).\n            Values from 1 to 127 - 1 second to 127 seconds in 1 second resolution.\n            Values from 128 to 254 - 1 minute to 127 minutes in 1 minute resolution.\n        ",
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Activation Time",
            max: "254",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "\n            This parameter allows to chose the time that load performs activated after complete an activation process.\n            Value 0 - Instantly (default).\n            Values from 1 to 127 - 1 second to 127 seconds in 1 second resolution.\n            Values from 128 to 254 - 1 minute to 127 minutes in 1 minute resolution.\n        ",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Lock Input",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "This parameter allows to choose operating for Main LED as identification at 20%.",
            Item: [
              {
                label: "Enables the pushbutton to control the load",
                value: "0",
              },
              {
                label: "Disables the action of the pushbutton on the load",
                value: "255",
              },
            ],
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Reset default (Write Only)",
            max: "39015",
            min: "0",
            size: "2",
            type: "list",
            value: "0",
            Help:
              "Write only parameter used to restore configurations or perform a completely restore default.",
            Item: [
              { label: "Configuration values are restored", value: "17170" },
              { label: "Factory reset", value: "39015" },
            ],
          },
          {
            genre: "config",
            index: "17",
            instance: "1",
            label: "PostReset State",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Sets the device state after a reset.",
            Item: [
              { label: "After a reset the load starts Off", value: "0" },
              {
                label: "After a reset the load recovers the last value",
                value: "255",
              },
            ],
          },
          {
            genre: "config",
            index: "19",
            instance: "1",
            label: "Press Action",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Defines the function performed by the device when keypad is pressed.",
            Item: [
              { label: "Short press toggles the load", value: "0" },
              { label: "Short press activates the load", value: "1" },
              { label: "Short press deactivates the load", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "20",
            instance: "1",
            label: "Identify (Write Only)",
            max: "255",
            min: "255",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Write only value that performs a fast blink on Central LED during 5 seconds in order to identify the device when it is installed in a multiple frame.",
            Item: [
              {
                label:
                  "The central LED flashes for 5 seconds at a frequency of 0,1s.",
                value: "255",
              },
            ],
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "Load State (Read Only)",
            max: "65535",
            min: "0",
            type: "short",
            value: "0",
            Help:
              "\n                Read only Configuration used to report the device state and last value. This value is represented in Hexadecimal.\n                Byte 0 informs about Load State (0 load is OFF and 1 load is ON).\n                Byte 1 informs about Load value (0x00 or 0xFF)\n            ",
          },
          {
            genre: "config",
            index: "27",
            instance: "1",
            label: "Lock Hold Press",
            max: "255",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n                Locks the major part of Hold press effects in order to avoid undesired Z-Wave changes, or restores Default.\n                0xFF Hold Press from 2sec to 30 sec does not performs a Node info.\n                Hold press of 30sec restores configuration except Lock Hold Press, and sends a Node info in order to add or remove from Z-Wave Network.\n            ",
            Item: [
              { label: "Hold Press is available", value: "0" },
              { label: "Hold Press is Locked", value: "255" },
            ],
          },
        ],
      },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "3" }],
          },
        ],
      },
    ],
  },
};

export default config;
