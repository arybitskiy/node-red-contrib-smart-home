import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "short",
            genre: "config",
            index: "1",
            label: "Trigger Delay",
            size: "2",
            min: "0",
            max: "65535",
            value: "0",
            units: "seconds",
            Help:
              "Set the delay time for turning associated devices OFF based on status change of your Contact Sensor, in seconds.  0 is default, which is instant.",
          },
          {
            type: "byte",
            genre: "config",
            index: "2",
            label: "Trigger Action",
            size: "1",
            min: "0",
            max: "255",
            value: "255",
            Help:
              "You can choose if your Contact Sensor turns an associated device on or off when sending the basic command set.  Value of 0 will set the associated device OFF and value 255 to turn it on.  Value between 1 and 99 will be a percentage of light.  Value between 100-254 are invalid.",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", max_associations: "5", label: "Lifeline" },
              { index: "2", max_associations: "5", label: "Control Command" },
              {
                index: "3",
                max_associations: "5",
                label: "Notification report",
              },
              {
                index: "4",
                max_associations: "5",
                label: "Binary sensor report",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
