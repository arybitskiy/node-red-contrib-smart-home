import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "1",
            label: "CO2 Notification threshold",
            size: "2",
            min: "1",
            max: "1200",
            units: "ppm",
            value: "1000",
            Help: "CO2 Notification threshold 1 to 2000ppm",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "CO2 reporting threshold",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "10",
            Help:
              "0 report disabled, base on 5ppm unit, 10 by default, 10*5ppm=50ppm",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Temperature reporting threshold",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "0 report disabled, base on 0.5C unit, 1 by default, 1*0.5C=0.5C",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Humidity reporting threshold",
            max: "50",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "2",
            Help: "0 report disabled, base on 1% unit, 2 by default, 2*1C=2C",
          },
          {
            genre: "config",
            index: "255",
            instance: "1",
            label: "Factory setting",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "Restore the factory setting - write only, set to 85 to reset",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              {
                index: "1",
                max_associations: "5",
                label: "Notification",
                auto: "false",
              },
              {
                index: "2",
                max_associations: "1",
                label: "Lifeline",
                auto: "true",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
