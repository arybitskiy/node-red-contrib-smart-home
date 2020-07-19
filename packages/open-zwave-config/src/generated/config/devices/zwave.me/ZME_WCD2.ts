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
            label: "Button 1 and 3 Pair Mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "Button 1 and 3 pair mode (Parameter Number 1,\n\t\t\tParameter Size 1) In separate mode button 1 works\n\t\t\twith group 1, button 3 with groups 3. Click is On, Hold\n\t\t\tis dimming Up, Double click is Off, Click-Hold is\n\t\t\tdimming Down. In pair button 1/3 are Up/Down\n\t\t\tcorrespondingly. Click is On/Off, Hold is dimming\n\t\t\tUp/Down. Single\tclicks works with group 1, double click with group\n\t\t\t3.",
            Item: [
              { label: "Separately", value: "0" },
              { label: "In Pair without Double Click (default)", value: "1" },
              { label: "In Pair with Double Click", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Button 2 and 4 Pair Mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "Button 2 and 4 pair mode (Parameter Number 2,\n\t\t\tParameter Size 1) In separate mode button 2 works\n\t\t\twith group 2, button 4 with groups 4. Click is On, Hold\n\t\t\tis dimming Up, Double click is Off, Click-Hold is\n\t\t\tdimming\tDown. In pair button 2/4 are Up/Down\n\t\t\tcorrespondingly. Click is On/Off, Hold is dimming\n\t\t\tUp/Down. Single clicks works with group 2, double click with group 4.\n\t\t\t",
            Item: [
              { label: "Separately", value: "0" },
              { label: "In Pair without Double Click (default)", value: "1" },
              { label: "In Pair with Double Click", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "11",
            label: "Action on Group 1",
            max: "5",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Action on group 1 (Parameter Number 11,\n\t\t\tParameter Size 1) In Switch On/Off only mode On\n\t\t\tcommand is sent on Dim Up, Off on Dim Down. In Scenes mode the\n\t\t\tscene ID sent is (10 * group + ActionID), where\n\t\t\tActionID is: 1 = On, 2 = Off, 3 = Dim Up Start, 4 =\n\t\t\tDim Down Start, 5 = Dim Up Stop, 6 = Dim Down Stop\n\t\t\t",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dimm (send Basic Set and Switch Multilevel) (Default)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scenes", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "12",
            label: "Action on Group 2",
            max: "5",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Action on group 2 (Parameter Number 12,\n\t\t\tParameter Size 1) In Switch On/Off only mode On\n\t\t\tcommand is sent on Dim Up, Off on Dim Down. In Scenes mode the\n\t\t\tscene ID sent is (10 * group + ActionID), where\n\t\t\tActionID is: 1 = On, 2 = Off, 3 = Dim Up Start, 4 =\n\t\t\tDim Down Start, 5 = Dim Up Stop, 6 = Dim Down Stop\n\t\t\t",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dimm (send Basic Set and Switch Multilevel) (Default)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scenes", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "13",
            label: "Action on Group 3",
            max: "5",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Action on group 3 (Parameter Number 13,\n\t\t\tParameter Size 1) In Switch On/Off only mode On\n\t\t\tcommand is sent on Dim Up, Off on Dim Down. In Scenes mode the\n\t\t\tscene ID sent is (10 * group + ActionID), where\n\t\t\tActionID is: 1 = On, 2 = Off, 3 = Dim Up Start, 4 =\n\t\t\tDim Down Start, 5 = Dim Up Stop, 6 = Dim Down Stop\n\t\t\t",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dimm (send Basic Set and Switch Multilevel) (Default)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scenes", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "14",
            label: "Action on Group 4",
            max: "5",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Action on group 4 (Parameter Number 14,\n\t\t\tParameter Size 1) In Switch On/Off only mode On\n\t\t\tcommand is sent on Dim Up, Off on Dim Down. In Scenes mode the\n\t\t\tscene ID sent is (10 * group + ActionID), where\n\t\t\tActionID is: 1 = On, 2 = Off, 3 = Dim Up Start, 4 =\n\t\t\tDim Down Start, 5 = Dim Up Stop, 6 = Dim Down Stop\n\t\t\t",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label:
                  "Switch On/Off and Dimm (send Basic Set and Switch Multilevel) (Default)",
                value: "1",
              },
              { label: "Switch On/Off only (send Basic Set)", value: "2" },
              { label: "Switch All", value: "3" },
              { label: "Send Scenes", value: "4" },
              { label: "Send Preconfigured Scenes", value: "5" },
            ],
          },
          {
            genre: "config",
            index: "20",
            label: "Typical Click Timeout",
            max: "100",
            min: "0",
            type: "byte",
            units: "x 10 milliseconds",
            value: "50",
            Help:
              "Typical time used to differenciate click, hold and double clicks",
          },
          {
            genre: "config",
            index: "21",
            label: "Switch All Command",
            max: "255",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Item: [
              { label: "Switch Off Only (Default)", value: "1" },
              { label: "Switch On Only", value: "2" },
              { label: "Switch all on and off", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "22",
            label: "Invert Buttons",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Item: [
              { label: "No (Default)", value: "0" },
              { label: "Yes", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "24",
            label: "Led Confirmation Mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "2",
            Help: "This allows to save battery",
            Item: [
              { label: "No Confirmations", value: "0" },
              { label: "Confirm Button Press", value: "1" },
              {
                label: "Confirm Button Press and delivery (Default)",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "30",
            label: "Send Unsolicited Battery Report on Wakeup",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Item: [
              { label: "No (default)", value: "0" },
              { label: "To same node as wake up notification", value: "1" },
              { label: "Broadcast to neighbours", value: "2" },
            ],
          },
        ],
      },
      { action: "add", id: "43", Compatibility: [{ GetSupported: [false] }] },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", label: "Group 1", max_associations: "8" },
              {
                auto: "true",
                index: "2",
                label: "Group 2",
                max_associations: "8",
              },
              {
                auto: "true",
                index: "3",
                label: "Group 3",
                max_associations: "8",
              },
              {
                auto: "true",
                index: "4",
                label: "Group 4",
                max_associations: "8",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
