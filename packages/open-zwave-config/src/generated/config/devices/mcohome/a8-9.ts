import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "byte",
            genre: "config",
            index: "1",
            label: "PM 2.5 Delta Level",
            size: "1",
            value: "0",
            Help:
              "\n          =0 Turn off report\n          >=2 Report when change >\n              n * 1ug/m3\n        ",
          },
          {
            type: "byte",
            genre: "config",
            index: "2",
            label: "CO2 Delta Level",
            size: "1",
            value: "0",
            Help:
              "\n          =0 Turn off report\n          >=2 Report when change >\n              n * 5ppm\n        ",
          },
          {
            type: "byte",
            genre: "config",
            index: "3",
            label: "Temperature Delta Level",
            size: "1",
            value: "0",
            Help:
              "\n          =0 Turn off report\n          >=1 Report when change >\n              n * 0.5 C\n        ",
          },
          {
            type: "byte",
            genre: "config",
            index: "4",
            label: "Humidity Delta Level",
            size: "1",
            value: "0",
            Help:
              "\n          =0 Turn off report\n          >=3 Report when change > n%\n        ",
          },
          {
            type: "list",
            genre: "config",
            index: "5",
            label: "VOC Delta Level",
            size: "1",
            value: "1",
            Item: [
              { label: "Turn off report", value: "0" },
              { label: "Report level change", value: "1" },
            ],
          },
          {
            type: "short",
            genre: "config",
            index: "6",
            label: "Lux Delta Level",
            size: "2",
            value: "0",
            Help:
              "\n          =0 Turn off report\n          >=20 Report when change >\n               n * 1 lux\n        ",
          },
          {
            type: "byte",
            genre: "config",
            index: "7",
            label: "dB Delta Level",
            size: "1",
            value: "0",
            Help:
              "\n          =0 Turn off report\n          >=5 Report when change >\n               n * 1dB\n        ",
          },
          {
            type: "list",
            genre: "config",
            index: "8",
            label: "PIR Delta Level",
            size: "1",
            value: "1",
            Item: [
              { label: "Turn off report", value: "0" },
              { label: "Report change", value: "1" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            index: "9",
            label: "Smoke Delta Level",
            size: "1",
            value: "1",
            Item: [
              { label: "Turn off report", value: "0" },
              { label: "Report change", value: "1" },
            ],
          },
          {
            type: "short",
            genre: "config",
            index: "10",
            label: "Smoke Timer",
            size: "2",
            value: "0",
            Help:
              "\n          =0 Turn off report\n          >10 Report every n * 1s interval\n        ",
          },
          {
            type: "short",
            genre: "config",
            index: "11",
            label: "PIR Timer",
            size: "2",
            value: "0",
            Help:
              "\n          =0 Turn off report\n          >10 Report every n * 1s interval\n        ",
          },
          {
            type: "short",
            genre: "config",
            index: "12",
            label: "PM 2.5 Timer",
            size: "2",
            value: "60",
            Help:
              "\n          =0 Turn off report\n          >10 Report every n * 1s interval\n        ",
          },
          {
            type: "short",
            genre: "config",
            index: "13",
            label: "CO2 Timer",
            size: "2",
            value: "60",
            Help:
              "\n          =0 Turn off report\n          >10 Report every n * 1s interval\n        ",
          },
          {
            type: "short",
            genre: "config",
            index: "14",
            label: "Temperature Timer",
            size: "2",
            value: "60",
            Help:
              "\n          =0 Turn off report\n          >10 Report every n * 1s interval\n        ",
          },
          {
            type: "short",
            genre: "config",
            index: "15",
            label: "Humidity Timer",
            size: "2",
            value: "60",
            Help:
              "\n          =0 Turn off report\n          >10 Report every n * 1s interval\n        ",
          },
          {
            type: "short",
            genre: "config",
            index: "16",
            label: "VOC Timer",
            size: "2",
            value: "60",
            Help:
              "\n          =0 Turn off report\n          >10 Report every n * 1s interval\n        ",
          },
          {
            type: "short",
            genre: "config",
            index: "17",
            label: "Lux Timer",
            size: "2",
            value: "60",
            Help:
              "\n          =0 Turn off report\n          >10 Report every n * 1s interval\n        ",
          },
          {
            type: "short",
            genre: "config",
            index: "18",
            label: "dB Timer",
            size: "2",
            value: "60",
            Help:
              "\n          =0 Turn off report\n          >10 Report every n * 1s interval\n        ",
          },
          {
            type: "list",
            genre: "config",
            index: "19",
            label: "Temperature Unit",
            size: "1",
            value: "0",
            Item: [
              { label: "C", value: "0" },
              { label: "F", value: "1" },
            ],
          },
          {
            type: "byte",
            genre: "config",
            index: "20",
            label: "Temperature Offset",
            size: "1",
            value: "100",
            Help: "\n          0 ~ 200\n          -10.0 ~ 10.0C\n        ",
          },
          {
            type: "byte",
            genre: "config",
            index: "21",
            label: "Humidity Offset",
            size: "1",
            value: "20",
            Help: "\n          0 ~ 40\n          -20.0 ~ 20.0%\n        ",
          },
          {
            type: "short",
            genre: "config",
            index: "22",
            label: "CO2 Offset",
            size: "2",
            value: "500",
            Help: "\n          0 ~ 1000\n          -500 ~ 500ppm\n        ",
          },
          {
            type: "byte",
            genre: "config",
            index: "23",
            label: "PM 2.5 Offset",
            size: "1",
            value: "100",
            Help: "\n          0 ~ 200\n          -100 ~ 100ug/m3\n        ",
          },
          {
            type: "short",
            genre: "config",
            index: "24",
            label: "Lux Offset",
            size: "2",
            value: "5000",
            Help: "\n          0 ~ 10000\n          -5000 ~ 5000lux\n        ",
          },
          {
            type: "byte",
            genre: "config",
            index: "25",
            label: "VOC Correct",
            size: "1",
            value: "5",
            Help: "\n          0 ~ 10\n          -5 ~ 5\n        ",
          },
          {
            type: "byte",
            genre: "config",
            index: "26",
            label: "dB Correct",
            size: "1",
            value: "50",
            Help: "\n          0 ~ 100\n          -50 ~ 50\n        ",
          },
          {
            type: "list",
            genre: "config",
            index: "27",
            label: "Write Only",
            size: "1",
            value: "0xFF",
            Item: [
              { label: "Restore factory settin", value: "0x55" },
              { label: "Restore default parameters", value: "0xAA" },
              { label: "Reset", value: "0xFF" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", max_associations: "1", label: "Lifeline" }],
          },
        ],
      },
    ],
  },
};

export default config;
