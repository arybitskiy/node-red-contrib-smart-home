import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          { text: "images/wenzhou/tz78.png", name: "ProductPic" },
          { text: "In Wall Single Relay Switch", name: "Name" },
          {
            text:
              "1. Have Z-Wave controller with exclusion mode\n2. Press the on/off button three times within 1.5 seconds to be excluded from the controller",
            name: "ExclusionDescription",
          },
          {
            text:
              "1. Have Z-Wave controller with inclusion mode\n2. Press the on/off button three times within 1.5 seconds to be included to the controller",
            name: "InclusionDescription",
          },
          { text: "TZ78", id: "0005", name: "Identifier", type: "0003" },
          {
            text:
              "1. This insert switch module is a transceiver which is a Z-Wave enabled device and is fully compatible with any Z-Wave enabled network. \n2. Each switch is designed to act as a repeater. Repeaters will re-transmit the RF signal to ensure the signal to ensure that the signal is received by its intended destination.\n3. You can use the button on the switch to include/exclude, manually on/off or act as a indicator. You can use it to turn on/off appliance remotely via smart home or computer.",
            name: "Description",
          },
          {
            text:
              "1. Press the socket on/off button three times within 1.5 seconds\n2.  then within 5 second to press and hold on for 1 second until the switch LED is off, reset to factory default successfully\n3. Use this procedure only in the event that the network primary controller is missing or otherwise inoperable",
            name: "ResetDescription",
          },
          {
            text: "CEPT (Europe) / Brazil / China",
            id: "0005",
            name: "FrequencyName",
            type: "0003",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Created, based on TZ74 and TZ68",
                author: "magpern",
                date: "12 Apr 2020",
                revision: 1,
              },
              {
                text: "Added description, include, exclude, reset info",
                author: "magpern",
                date: "14 Apr 2020",
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
            type: "list",
            genre: "config",
            instance: "1",
            index: "1",
            label: "Night light",
            min: "0",
            max: "1",
            value: "1",
            size: "1",
            Help:
              "The LED on the TZ78 will by default, turn ON when the load attached is turned OFF. To make the LED turn ON when the load attached is turned ON instead, set parameter to a value of 0.",
            Item: [
              { label: "The LED is ON when the load is ON", value: "0" },
              { label: "The LED is ON when the load is OFF", value: "1" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "2",
            label: "Memory Function",
            min: "0",
            max: "1",
            value: "1",
            size: "1",
            Help: "switch memory function",
            Item: [
              { label: "no switch memory function", value: "0" },
              {
                label: "The socket status is same as before when power ON",
                value: "1",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "3",
            label: "Edge or Pulse mode",
            min: "1",
            max: "3",
            value: "3",
            size: "1",
            Help: "switch mode",
            Item: [
              { label: "Edge Mode", value: "1" },
              { label: "Pulse Mode", value: "2" },
              { label: "Edge-toggle Mode", value: "3" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "On/Off", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
