import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "0",
            instance: "1",
            label: "Invert Lock Direction",
            max: "1",
            min: "0",
            type: "byte",
            value: "0",
            Help:
              "0=The motor goes clockwise when unlatched; 1= The motor goes counterclockwise when unlatched",
          },
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Run time Lock",
            max: "15",
            min: "1",
            type: "byte",
            value: "5",
            Help: "Motor/relay run time LOCK in sec 1-15",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Run time UnLock",
            max: "15",
            min: "1",
            type: "byte",
            value: "5",
            Help: "Motor/relay run time UNLOCK in sec 1-15",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Motor speed",
            max: "15",
            min: "0",
            type: "byte",
            value: "9",
            Help: "Value 0-15/0=fastest 15=slowest",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Step Motor drive mode",
            size: "1",
            type: "list",
            value: "0",
            Help: "How the motor will turn according to torque and speed",
            Item: [
              {
                label:
                  "(Step motor) Wave drive mode.(Less torque, min. power usage, full rotation speed.)",
                value: "0",
              },
              {
                label:
                  "(Step motor) Full drive mode.  (Medium torque, max. power usage, full rotation speed.)",
                value: "1",
              },
              {
                label:
                  "(Step motor) HalfFstep drive mode. (Max. torque, max. power usage, half rotation speed.)",
                value: "2",
              },
              {
                label:
                  "(Relay) Puts DC on connector pin 1 & 2 for the duration of parameter #2 or #3. The polarity of pin 1 & 2 are reversed with respect to  open / close command. A close command would set p1+ and p2F, open is p1F and   p2+",
                value: "3",
              },
              {
                label:
                  "(Relay) Lock open sets p1+, p2F, p3z, p4z for parameter #3 seconds. Lock close sets p1z, p2z, p3+, p4F.",
                value: "4",
              },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [
              {
                index: "1",
                label: "Group 1",
                max_associations: "1",
                write_only: "true",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
