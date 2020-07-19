import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0149:0104:0012",
            name: "OzwInfoPage",
          },
          { text: "images/widom/UBS104.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1016/",
            id: "0104",
            name: "ZWProductPage",
            type: "0012",
          },
          { text: "UBS104", id: "0104", name: "Identifier", type: "0012" },
          { text: "WiDOM Universal Relay Switch UBS104", name: "Name" },
          {
            text:
              "WiDOM Universal Relay Switch is an ON\\\\OFF device based on latching relay and can be used as both a local and remote switch.",
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "0104",
            name: "FrequencyName",
            type: "0012",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1016/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
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
            label: "Device status 1 click",
            max: "4",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help: "Device status when the external switch receives 1 click",
            Item: [
              { label: "Toggle", value: "1" },
              { label: "On", value: "2" },
              { label: "Off", value: "3" },
              { label: "Ignore", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Device status 2 clicks",
            max: "4",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help: "Device status when the external switch receives 2 clicks",
            Item: [
              { label: "Toggle", value: "1" },
              { label: "On", value: "2" },
              { label: "Off", value: "3" },
              { label: "Ignore", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "Device status 3 clicks",
            max: "4",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help: "Device status when the external switch receives 3 clicks",
            Item: [
              { label: "Toggle", value: "1" },
              { label: "On", value: "2" },
              { label: "Off", value: "3" },
              { label: "Ignore", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Device status held down",
            max: "4",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help: "Device status when the external switch is held down",
            Item: [
              { label: "Toggle", value: "1" },
              { label: "On", value: "2" },
              { label: "Off", value: "3" },
              { label: "Ignore", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Action when 1 click",
            max: "6",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help:
              'Action on the associated devices when the external switch receives 1 click"',
            Item: [
              { label: "Toggle", value: "1" },
              { label: "Ignore if On", value: "2" },
              { label: "Ignore if Off", value: "3" },
              { label: "Toggle associated", value: "4" },
              { label: "Set as initial status value", value: "5" },
              { label: "Ignore", value: "6" },
            ],
          },
          {
            genre: "config",
            index: "6",
            label: "Action when 2 clicks",
            max: "6",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Action on the associated devices when the external switch receives 2 clicks",
            Item: [
              { label: "Toggle", value: "1" },
              { label: "Ignore if On", value: "2" },
              { label: "Ignore if Off", value: "3" },
              { label: "Toggle associated", value: "4" },
              { label: "Set as initial status value", value: "5" },
              { label: "Ignore", value: "6" },
            ],
          },
          {
            genre: "config",
            index: "7",
            label: "Action when 3 clicks",
            max: "6",
            min: "1",
            size: "1",
            type: "list",
            value: "6",
            Help:
              "Action on the associated devices when the external switch receives 3 clicks",
            Item: [
              { label: "Toggle", value: "1" },
              { label: "Ignore if On", value: "2" },
              { label: "Ignore if Off", value: "3" },
              { label: "Toggle associated", value: "4" },
              { label: "Set as initial status value", value: "5" },
              { label: "Ignore", value: "6" },
            ],
          },
          {
            genre: "config",
            index: "8",
            label: "Action when is held down",
            max: "6",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Action on the associated devices when the external switch is held down",
            Item: [
              { label: "Toggle", value: "1" },
              { label: "Ignore if On", value: "2" },
              { label: "Ignore if Off", value: "3" },
              { label: "Toggle associated", value: "4" },
              { label: "Set as initial status value", value: "5" },
              { label: "Ignore", value: "6" },
            ],
          },
          {
            genre: "config",
            index: "9",
            label: "Action on all devices when 1 click",
            max: "5",
            min: "1",
            size: "1",
            type: "list",
            value: "5",
            Help:
              "Action performed on all network devices when the external switch receives 1 click",
            Item: [
              { label: "Toggle", value: "1" },
              { label: "Ignore if On", value: "2" },
              { label: "Ignore if Off", value: "3" },
              { label: "Set as initial status value", value: "4" },
              { label: "Ignore", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "10",
            label: "Action on all devices when 2 clicks",
            max: "5",
            min: "1",
            size: "1",
            type: "list",
            value: "5",
            Help:
              "Action performed on all network devices when the external switch receives 2 clicks",
            Item: [
              { label: "Toggle", value: "1" },
              { label: "Ignore if On", value: "2" },
              { label: "Ignore if Off", value: "3" },
              { label: "Set as initial status value", value: "4" },
              { label: "Ignore", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "11",
            label: "Action on all devices when 3 clicks",
            max: "5",
            min: "1",
            size: "1",
            type: "list",
            value: "5",
            Help:
              "Action performed on all network devices when the external switch receives 3 clicks",
            Item: [
              { label: "Toggle", value: "1" },
              { label: "Ignore if On", value: "2" },
              { label: "Ignore if Off", value: "3" },
              { label: "Set as initial status value", value: "4" },
              { label: "Ignore", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "12",
            label: "Action on all devices when held down",
            max: "5",
            min: "1",
            size: "1",
            type: "list",
            value: "5",
            Help:
              "Action performed on all network devices when the external switch is held down",
            Item: [
              { label: "Toggle", value: "1" },
              { label: "Ignore if On", value: "2" },
              { label: "Ignore if Off", value: "3" },
              { label: "Set as initial status value", value: "4" },
              { label: "Ignore", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "20",
            label: "Device status upon receipt of a Basic Set",
            max: "4",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help: "Device status upon receipt of a Basic Set",
            Item: [
              { label: "How received", value: "1" },
              { label: "Ignore if On", value: "2" },
              { label: "Ignore if Off", value: "3" },
              { label: "Ignore", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "30",
            label: "ON_LEVEL Group 2",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "255",
            Help:
              "ON_LEVEL value used for devices belonging to Group 2 (1 Click association group). Set value from 0 to 255 (Default: 255)",
          },
          {
            genre: "config",
            index: "31",
            label: "OFF_LEVEL Group 2",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "OFF_LEVEL value used for devices belonging to Group 2 (1 Click association group). Set value from 0 to 255 (Default: 0)",
          },
          {
            genre: "config",
            index: "32",
            label: "ON_LEVEL Group 3",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "255",
            Help:
              "ON_LEVEL value used for devices belonging to Group 3 (2 Click association group). Set value from 0 to 255 (Default: 255)",
          },
          {
            genre: "config",
            index: "33",
            label: "OFF_LEVEL Group 3 ",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "OFF_LEVEL value used for devices belonging to Group 3 (2 Click association group). Set value from 0 to 255 (Default: 0)",
          },
          {
            genre: "config",
            index: "34",
            label: "ON_LEVEL Group 4",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "255",
            Help:
              "ON_LEVEL value used for devices belonging to Group 4 (3 Click association group). Set value from 0 to 255 (Default: 255)",
          },
          {
            genre: "config",
            index: "35",
            label: "OFF_LEVEL Group 4",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "OFF_LEVEL value used for devices belonging to Group 4 (3 Click association group). Set value from 0 to 255 (Default: 0)",
          },
          {
            genre: "config",
            index: "36",
            label: "ON_LEVEL Group 5",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "255",
            Help:
              "ON_LEVEL value used for devices belonging to Group 5 (Hold association group). Set value from 0 to 255 (Default: 255)",
          },
          {
            genre: "config",
            index: "37",
            label: "OFF_LEVEL Group 5",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help:
              "OFF_LEVEL value used for devices belonging to Group 5 (Hold association group). Set value from 0 to 255 (Default: 0)",
          },
          {
            genre: "config",
            index: "40",
            label: "Timer associated with the 1 click",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Timer associated with the 1 click event on the external switch",
            Item: [
              { label: "Timer disabled", value: "0" },
              { label: "Timer enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "41",
            label: "Timer associated with the 2 click",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Timer associated with the 2 click event on the external switch",
            Item: [
              { label: "Timer disabled", value: "0" },
              { label: "Timer enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "42",
            label: "Timer associated with the 3 click",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Timer associated with the 3 click event on the external switch",
            Item: [
              { label: "Timer disabled", value: "0" },
              { label: "Timer enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "43",
            label: "Timer associated with the hold",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Timer associated with the hold event on the external switch",
            Item: [
              { label: "Timer disabled", value: "0" },
              { label: "Timer enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "44",
            label: "Timer associated with Basic Set command",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Timer associated with the reception of a Basic Set command",
            Item: [
              { label: "Timer disabled", value: "0" },
              { label: "Timer enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "45",
            label: "Switch-off timer",
            max: "3600",
            min: "0",
            size: "2",
            type: "short",
            value: "600",
            Help: "Time in seconds (1 3600). Default: 600 (10 minutes)",
          },
          {
            genre: "config",
            index: "46",
            label: "Switch-off timer validity",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "Switch-off timer validity",
            Item: [
              { label: "Cancel", value: "0" },
              { label: "Mantain", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "50",
            label: "Smoke Alarm, CO, CO2 Action",
            max: "4",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help: "Smoke Alarm, CO, CO2 Action",
            Item: [
              { label: "On", value: "1" },
              { label: "Off", value: "2" },
              { label: "Flash", value: "3" },
              { label: "Ignore", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "51",
            label: "Heat Allarm",
            max: "4",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help: "Heat Allarm",
            Item: [
              { label: "On", value: "1" },
              { label: "Off", value: "2" },
              { label: "Flash", value: "3" },
              { label: "Ignore", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "52",
            label: "Water Allarm",
            max: "4",
            min: "1",
            size: "1",
            type: "list",
            value: "2",
            Help: "Water Allarm",
            Item: [
              { label: "On", value: "1" },
              { label: "Off", value: "2" },
              { label: "Flash", value: "3" },
              { label: "Ignore", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "53",
            label: "Home Security",
            max: "4",
            min: "1",
            size: "1",
            type: "list",
            value: "3",
            Help: "Home Security",
            Item: [
              { label: "On", value: "1" },
              { label: "Off", value: "2" },
              { label: "Flash", value: "3" },
              { label: "Ignore", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "54",
            label: "ON time during flashing",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "5",
            Help:
              "ON time during flashing. Set value from 0 to 255 (Default: 5)",
          },
          {
            genre: "config",
            index: "55",
            label: "OFF time during flashing",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "5",
            Help:
              "OFF time during flashing. Set value from 0 to 255 (Default: 5)",
          },
          {
            genre: "config",
            index: "56",
            label: "Duration of flashing phase",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "10",
            Help:
              "Duration of flashing phase. Set value from 0 to 255 (Default: 10)",
          },
          {
            genre: "config",
            index: "60",
            label: "Startup Status",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "3",
            Help: "Startup Status",
            Item: [
              { label: "On", value: "1" },
              { label: "Off", value: "2" },
              { label: "Previous status", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "61",
            label: "Configuration Reset",
            max: "4",
            min: "0",
            size: "1",
            type: "list",
            value: "4",
            Help: "Configuration Reset",
            Item: [
              { label: "Factory reset", value: "0" },
              { label: "Reset associations", value: "1" },
              { label: "Reset configurations", value: "2" },
              { label: "Ignore", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "62",
            label: "Type of external switch",
            max: "4",
            min: "0",
            size: "1",
            type: "list",
            value: "4",
            Help: "Type of external switch",
            Item: [
              { label: "Ignore", value: "0" },
              { label: "Button", value: "1" },
              { label: "Bistable switch", value: "2" },
              { label: "AC sensing", value: "3" },
              { label: "Automatic recognition", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "63",
            label: "Sensitivity",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            value: "9",
            Help: "Sensitivity. Set value from 0 to 255 (Default: 9)",
          },
          {
            genre: "config",
            index: "64",
            label: "Load protection",
            max: "3600",
            min: "0",
            size: "2",
            type: "short",
            value: "0",
            Help: "Load protection. Time in seconds (3600). Default: 0",
          },
          {
            genre: "config",
            index: "65",
            label: "Learn Mode",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Learn Mode",
            Item: [
              { label: "Ignore", value: "0" },
              { label: "1 Click", value: "1" },
              { label: "2 Clicks", value: "2" },
              { label: "3 Clicks", value: "3" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "5",
            Group: [
              {
                index: "1",
                label: "devices that will be notified of changes in its status",
                max_associations: "16",
              },
              {
                index: "2",
                label:
                  "devices that will be controlled by a single click on the external switch",
                max_associations: "16",
              },
              {
                index: "3",
                label:
                  "devices that will be controlled by a double click on the external switch",
                max_associations: "16",
              },
              {
                index: "4",
                label:
                  "devices that will be controlled by a triple click on the external switch",
                max_associations: "16",
              },
              {
                index: "5",
                label:
                  "devices that will be controlled by hold on the external switch",
                max_associations: "16",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
