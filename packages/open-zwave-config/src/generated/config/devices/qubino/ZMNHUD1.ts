import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
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
            value: "1",
            Help: "",
            Item: [
              { label: "Mono-stable", value: "0" },
              { label: "Bi-stable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Input 1 contact type",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              { label: "Normally Open", value: "0" },
              { label: "Normally Close", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Input 1 operation mode 1",
            max: "6",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "",
            Item: [
              { label: "No modification with Input 1", value: "0" },
              { label: "Confort", value: "1" },
              { label: "Confort -1C", value: "2" },
              { label: "Confort -2C", value: "3" },
              { label: "Eco Mode", value: "4" },
              { label: "Frost Protection", value: "5" },
              { label: "Stop", value: "6" },
            ],
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Input 1 operation mode 2",
            max: "6",
            min: "0",
            size: "1",
            type: "list",
            value: "4",
            Help: "",
            Item: [
              { label: "No modification with Input 1", value: "0" },
              { label: "Confort", value: "1" },
              { label: "Confort -1C", value: "2" },
              { label: "Confort -2C", value: "3" },
              { label: "Eco Mode", value: "4" },
              { label: "Frost Protection", value: "5" },
              { label: "Stop", value: "6" },
            ],
          },
          {
            genre: "config",
            index: "30",
            instance: "1",
            label: "Saving the state of the device after a power failure",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "",
            Item: [
              {
                label:
                  "Returns to the last position saved before a power failure",
                value: "0",
              },
              { label: "Returns to off position", value: "1" },
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
              { index: "1", label: "Lifeline", max_associations: "1" },
              { index: "2", label: "Multilevel", max_associations: "16" },
              { index: "3", label: "Basic on/off ", max_associations: "16" },
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
