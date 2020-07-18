import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0159:0001:0001",
            name: "OzwInfoPage",
          },
          { text: "images/qubino/ZMNHDA2.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1231/",
            id: "0001",
            name: "ZWProductPage",
            type: "0001",
          },
          { text: "ZMNHDA2", id: "0001", name: "Identifier", type: "0001" },
          { text: "GOAP Qubino Dimmer", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0001",
          },
          { text: "flush zwave dimmer", name: "Description" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1231/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
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
            label: "Input 1 switch type",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Mono-stable switch type (push button)", value: "0" },
              { label: "Bi-stable switch type", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Input 2 contact type",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Default value 0.",
            Item: [
              { label: "NO (normaly open) input type", value: "0" },
              { label: "NC (normaly closed) input type", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Input 3 contact type",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Default value 0.",
            Item: [
              { label: "NO (normaly open) input type", value: "0" },
              { label: "NC (normaly close) input type", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Activate / deactivate functions ALL ON/ALL OFF",
            max: "255",
            min: "0",
            size: "2",
            type: "list",
            value: "0",
            Help:
              "Flush 1 relay module responds to commands ALL ON / ALL OFF that may be sent by the main controller or by other controller belonging to the system. Default value 0.",
            Item: [
              { label: "ALL ON active, ALL OFF active", value: "255" },
              {
                label: "ALL ON is not active ALL OFF is not active",
                value: "0",
              },
              { label: "ALL ON is not active ALL OFF active", value: "1" },
              { label: "ALL ON active ALL OFF is not active", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "30",
            instance: "1",
            label: "Saving the state of the relay after a power failure",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Default value 0.",
            Item: [
              {
                label:
                  "Flush dimmer module saves its state before power failure (it returns to the last position saved before a power failure)",
                value: "0",
              },
              {
                label:
                  "Flush dimmer module does not save the state after a power failure, it returns to off position",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "40",
            instance: "1",
            label: "Power reporting in Watts on power change",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            value: "5",
            Help:
              "Set value from 0 - 100 (0% - 100%). 0 - Reporting Disabled. 1 - 100 = 1% - 100% Reporting enabled. Power report is send (push) only when actual power in Watts in real time change for more than set percentage comparing to previous actual power in Watts, step is 1%. Default value 5.",
          },
          {
            genre: "config",
            index: "42",
            instance: "1",
            label: "Power reporting in Watts by time interval",
            max: "65535",
            min: "0",
            type: "short",
            value: "300",
            Help:
              "Set value means time interval (0 - 65535) in seconds, when power report is send. 0 - Reporting Disabled. 1 - 65535 = 1 second - 65535 seconds. Reporting enabled. Power report is send with time interval set by entered value. Default value 300 (power report in Watts is send each 300s).",
          },
          {
            genre: "config",
            index: "60",
            instance: "1",
            label: "Minimum dimming value",
            max: "98",
            min: "1",
            type: "byte",
            value: "1",
            Help:
              "1 - 98 = 1% - 98%, step is 1%. Minimum dimming values is set by entered value. Default value 1 (Minimum dimming value is 1%). NOTE: The minimum level may not be higher than the maximum level.",
          },
          {
            genre: "config",
            index: "61",
            instance: "1",
            label: "Maximum dimming value",
            max: "99",
            min: "2",
            type: "byte",
            value: "99",
            Help:
              "2 - 99 = 2% - 99%, step is 1%. Maximum dimming values is set by entered value. Default value 99 (Maximum dimming value is 99%). NOTE: The maximum level may not be lower than the minimum level.",
          },
          {
            genre: "config",
            index: "65",
            instance: "1",
            label: "Dimming time (soft on/off)",
            max: "255",
            min: "1",
            type: "byte",
            value: "100",
            Help:
              "Set value means time of moving the Dimmer between min. and max. dimming values by short press of push button I1 or controlled through. 1- 255 = 10mseconds - 2550mseconds (2,55s), step is 10mseconds. Default value 100 (Dimming time between min. and max. dimming values is 1s).",
          },
          {
            genre: "config",
            index: "66",
            instance: "1",
            label: "Dimming time when key pressed",
            max: "255",
            min: "1",
            type: "byte",
            value: "3",
            Help:
              "Time of moving the Dimmer between min. and max dimming values by continues hold of push button I1. 1- 255 = 1 second - 255 seconds. Default value 3 (Dimming time between min. and max. dimming values is 3s).",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              {
                index: "1",
                label:
                  "Multilevel Switch Set reflecting the state/value of the Flush Dimmer",
                max_associations: "16",
              },
              {
                index: "2",
                label: "Basic Set On/Off reflecting the input I2 state",
                max_associations: "16",
              },
              {
                index: "3",
                label: "Basic Set On/Off reflecting the input I3 state",
                max_associations: "16",
              },
              {
                auto: "true",
                index: "4",
                label: "Default controller reporting group",
                max_associations: "1",
              },
            ],
          },
        ],
      },
      { action: "remove", id: "32" },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
    ],
  },
};

export default config;
