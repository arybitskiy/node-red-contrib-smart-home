import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "7",
            label: "Input 1 switch function selection",
            size: "1",
            min: "0",
            max: "5",
            value: "4",
            Help: "Default value 4",
            Item: [
              { label: "Disabled", value: "0" },
              {
                label: "IR external relay control - mono stable push button",
                value: "2",
              },
              {
                label: "IR external relay control - bi stable switch",
                value: "3",
              },
              {
                label: "External relay control - mono stable push button",
                value: "4",
              },
              {
                label: "External relay control - bi stable switch",
                value: "5",
              },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "10",
            label: "Activate / deactivate functions ALL ON/ALL OFF",
            size: "2",
            min: "0",
            max: "255",
            value: "255",
            Help:
              "Smart meter module responds to commands ALL ON / ALL OFF that may be sent by the main controller or by other controller belonging to the system.\n\t\t\tDefault value 255.",
            Item: [
              { label: "ALL ON active, ALL OFF active", value: "255" },
              {
                label: "ALL ON is not active, ALL OFF is not active",
                value: "0",
              },
              { label: "ALL ON is not active, ALL OFF active", value: "1" },
              { label: "ALL ON active, ALL OFF is not active", value: "2" },
            ],
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "11",
            label:
              "Automatic turning off IR external relay output after set time",
            size: "2",
            min: "0",
            max: "32536",
            value: "0",
            Help:
              "0 - Auto OFF disabled.\n\t\t\t1 second to 32536 seconds Auto OFF enabled with defined time, step is 1 second.\n\t\t\tDefault value 0.",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "12",
            label:
              "Automatic turning on IR external relay output after set time",
            size: "2",
            min: "0",
            max: "32535",
            value: "0",
            Help:
              "0 - Auto ON disabled.\n\t\t\t1 second to 32535 seconds Auto ON enabled with defined time, step is 1 second.\n\t\t\tDefault value 0.",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "13",
            label: "Automatic turning off External relay output after set time",
            size: "2",
            min: "0",
            max: "32536",
            value: "0",
            Help:
              "0 - Auto OFF disabled.\n\t\t\t1 second to 32536 seconds Auto OFF enabled with defined time, step is 1 second.\n\t\t\tDefault value 0.",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "14",
            label: "Automatic turning on External relay output after set time",
            size: "2",
            min: "0",
            max: "32535",
            value: "0",
            Help:
              "0 - Auto ON disabled.\n\t\t\t1 second to 32535 seconds Auto ON enabled with defined time, step is 1 second.\n\t\t\tDefault value 0.",
          },
          {
            type: "byte",
            genre: "config",
            instance: "1",
            index: "40",
            label: "Power reporting in Watts on power change",
            size: "1",
            min: "0",
            max: "100",
            value: "10",
            Help:
              "Set value from 0 - 100 (0% - 100%).\n\t\t\t0 - Reporting Disabled.\n\t\t\t1 - 100 = 1% - 100% Reporting enabled.\n\t\t\tPower report is send (push) only when actual power in Watts in real time change for more than set percentage comparing to previous actual power in Watts, step is 1%.\n\t\t\tDefault value 10.",
          },
          {
            type: "short",
            genre: "config",
            instance: "1",
            index: "42",
            label: "Power reporting in Watts by time interval",
            min: "0",
            max: "32767",
            value: "0",
            Help:
              "Set value means time interval (0 - 32767) in seconds, when power report is send.\n\t\t\t0 - Reporting Disabled.\n\t\t\t1 second to 32767 seconds reporting enabled.\n\t\t\tPower report is send with time interval set by entered value.\n\t\t\tDefault value 0.",
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "45",
            label: "Reset Power counters",
            size: "1",
            min: "0",
            max: "15",
            value: "0",
            Help: "Default value 0",
            Item: [
              { label: "No function", value: "0" },
              { label: "Reset counter 1 - KWh", value: "1" },
              { label: "Reset counter 2 - KVARh", value: "2" },
              { label: "Reset counter 3 - KVAh", value: "4" },
              { label: "Reset ALL counters", value: "15" },
            ],
          },
          {
            type: "list",
            genre: "config",
            instance: "1",
            index: "100",
            label:
              "Enable /Disable endpoints IR external relay and External relay",
            size: "1",
            min: "0",
            max: "3",
            value: "0",
            Help:
              "Enabling IR external relay and External relay or both of them, means that endpoint (IR external relay) and endpoint (External relay) or both will be prensent on UI. \n\t\t\t\tDisabling them will result in hiding endpoints according to parameter set value.Note that hiding endpoint has no impact on its functionality. \n\t\t\t\tDefault value 0",
            Item: [
              {
                label:
                  "Endpoints IR external relay and External relay disabled",
                value: "0",
              },
              {
                label:
                  "Endpoints IR external relay disabled, External relay enabled",
                value: "1",
              },
              {
                label:
                  "Endpoints IR external relay enabled, External relay disabled",
                value: "2",
              },
              {
                label: "Endpoints IR external relay and External relay enabled",
                value: "3",
              },
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
              { index: "1", max_associations: "1", label: "Lifeline" },
              {
                index: "2",
                max_associations: "16",
                label: "Basic on/off (IR external relay)",
              },
              {
                index: "3",
                max_associations: "16",
                label: "Switch binary report (IR external relay)",
              },
              {
                index: "5",
                max_associations: "16",
                label: "Basic on/off (External relay)",
              },
              {
                index: "6",
                max_associations: "16",
                label: "Switch binary report (External relay)",
              },
            ],
          },
        ],
      },
      { id: "142", Compatibility: [{ ForceInstances: [true] }] },
      { id: "32", action: "remove" },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
    ],
  },
};

export default config;
