import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/010F:1000:0900",
            name: "OzwInfoPage",
          },
          { text: "images/fibaro/fgrgbwm441.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1054/",
            id: "1000",
            name: "ZWProductPage",
            type: "0900",
          },
          { text: "FGRGBWM-441", id: "1000", name: "Identifier", type: "0900" },
          { text: "FIBARO RGBW Dimmer", name: "Name" },
          {
            text: "CEPT (Europe)",
            id: "1000",
            name: "FrequencyName",
            type: "0900",
          },
          { text: "RGBW Controller", name: "Description" },
          {
            text: "https://products.z-wavealliance.org/products/1072/",
            id: "2000",
            name: "ZWProductPage",
            type: "0900",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "2000",
            name: "FrequencyName",
            type: "0900",
          },
          { text: "FGRGBWM-441", id: "2000", name: "Identifier", type: "0900" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1054/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1072/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 5,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      { action: "remove", id: "115" },
      {
        id: "51",
        Value: [
          {
            genre: "user",
            index: "0",
            instance: "1",
            label: "Color",
            type: "string",
            units: "#RRGGBBWW",
            value: "#00000000",
            verify_changes: "false",
          },
        ],
        Compatibility: [{ ColorIndexBug: [true] }],
      },
      {
        id: "38",
        TriggerRefreshValue: [
          {
            Genre: "user",
            Index: "0",
            Instance: "1",
            RefreshClassValue: [
              {
                CommandClass: "51",
                Index: "255",
                Instance: "1",
                RequestFlags: "0",
              },
            ],
          },
          {
            Genre: "user",
            Index: "0",
            Instance: "2",
            RefreshClassValue: [
              {
                CommandClass: "51",
                Index: "255",
                Instance: "1",
                RequestFlags: "0",
              },
            ],
          },
          {
            Genre: "user",
            Index: "0",
            Instance: "3",
            RefreshClassValue: [
              {
                CommandClass: "51",
                Index: "255",
                Instance: "1",
                RequestFlags: "0",
              },
            ],
          },
          {
            Genre: "user",
            Index: "0",
            Instance: "4",
            RefreshClassValue: [
              {
                CommandClass: "51",
                Index: "255",
                Instance: "1",
                RequestFlags: "0",
              },
            ],
          },
          {
            Genre: "user",
            Index: "0",
            Instance: "5",
            RefreshClassValue: [
              {
                CommandClass: "51",
                Index: "255",
                Instance: "1",
                RequestFlags: "0",
              },
            ],
          },
          {
            Genre: "user",
            Index: "0",
            Instance: "6",
            RefreshClassValue: [
              {
                CommandClass: "51",
                Index: "255",
                Instance: "1",
                RequestFlags: "0",
              },
            ],
          },
        ],
      },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Enable/Disable ALL ON/OFF",
            size: "1",
            type: "list",
            value: "255",
            Help: "Enable/Disable ALL ON/OFF",
            Item: [
              { label: "ALL ON disabled/ ALL OFF disabled", value: "0" },
              { label: "ALL ON disabled/ ALL OFF active", value: "1" },
              { label: "ALL ON active / ALL OFF disabled", value: "2" },
              { label: "ALL ON active / ALL OFF active", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Associations command class choice",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Choose which command classes are sent to associated devices.",
            Item: [
              {
                label:
                  "Normal (Dimmer) - BASIC SET/SWITCH_MULTILEVEL_START/STOP",
                value: "0",
              },
              {
                label:
                  "Normal (RGBW) - COLOR_CONTROL_SET/START/STOP_STATE_CHANGE",
                value: "1",
              },
              { label: "Normal (RGBW) - COLOR_CONTROL_SET", value: "2" },
              {
                label: "Brightness - BASIC SET/SWITCH_MULTILEVEL_START/STOP",
                value: "3",
              },
              { label: "Rainbow (RGBW) - COLOR_CONTROL_SET", value: "4" },
            ],
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Outputs state change mode",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Choose the behaviour of transitions between different levels.",
            Item: [
              {
                label:
                  "MODE 1 - Constant Speed (speed is defined by parameters 9 and 10)",
                value: "0",
              },
              {
                label:
                  "MODE 2 - Constant Time (RGB/RBGW only. Time is defined by parameter 11)",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Dimming step value (for MODE 1)",
            max: "99",
            min: "1",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "Size of the step for each change in level during the transition.",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Time between dimming steps (for MODE 1)",
            max: "60000",
            min: "0",
            type: "short",
            units: "ms",
            value: "10",
            Help:
              "Time between each step in a transition between levels.  Setting this to zero means an instantaneous change.",
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Time to complete the entire transition (for MODE 2)",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "67",
            Help:
              "0 - immediate change; 1->63: 20ms->126ms (value*20ms); 65->127: 1s->63s (value-64)*1s; 129->191: 10s->630s (value-128)*10s; 193->255: 1min->63min (value-192)*1min.  Default setting: 67 (3s)",
          },
          {
            genre: "config",
            index: "12",
            instance: "1",
            label: "Maximum dimmer level",
            max: "255",
            min: "3",
            type: "byte",
            units: "",
            value: "255",
            Help: "Maximum brightness level for the dimmer",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "Minimum dimmer level",
            max: "255",
            min: "2",
            type: "byte",
            units: "",
            value: "2",
            Help: "Minimum brightness level for the dimmer",
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Inputs / Outputs configuration",
            type: "short",
            value: "4369",
            Help:
              "This is too complex to describe here, since this value is built up from 4-bits for each of the 4 channels.  Refer to the table in the product manual.  Default value is 4369 (1111 in hex).",
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Option double click",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Option double click (lighting set at 100%). 0 - Double click disabled, 1 - Double click enabled. Default setting 1",
            Item: [
              { label: "Double click disabled", value: "0" },
              { label: "Double click enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "16",
            instance: "1",
            label: "Saving state before power failure",
            size: "1",
            type: "list",
            value: "1",
            Help: "Saving state before power failure",
            Item: [
              {
                label:
                  "State NOT saved at power failure, all outputs are set to OFF upon power restore",
                value: "0",
              },
              {
                label:
                  "State saved at power failure, all outputs are set to previous state upon power restore",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "30",
            instance: "1",
            label: "Alarm",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Alarm of any type (general alarm, water flooding alarm, smoke alarm: CO, CO2, temperature alarm).  Default setting 0 (Inactive)",
            Item: [
              { label: "INACTIVE - no response to alarm frames", value: "0" },
              {
                label:
                  "ALARM ON - the device turns on once alarm is detected (all channels set to 99%)",
                value: "1",
              },
              {
                label:
                  "ALARM OFF - the device turns off once alarm is detected (all channels set to 0%)",
                value: "2",
              },
              {
                label:
                  "ALARM PROGRAM - alarm sequence turns on (program selected in parameter 38)",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "38",
            instance: "1",
            label: "Alarm sequence program",
            max: "10",
            min: "1",
            type: "byte",
            units: "",
            value: "10",
            Help: "Program number selected from the 10 available.",
          },
          {
            genre: "config",
            index: "39",
            instance: "1",
            label: "Active PROGRAM alarm time",
            max: "65534",
            min: "1",
            type: "short",
            units: "s",
            value: "600",
            Help:
              "In ALARM PROGRAM mode (see parameter 30), this defines the time in seconds the program lasts (1s->65534s)",
          },
          {
            genre: "config",
            index: "42",
            instance: "1",
            label: "Command class reporting Outputs status change",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Specify which command class is used to report output status changes",
            Item: [
              {
                label:
                  "Reporting as a result of inputs and controllers actions (SWITCH MULTILEVEL)",
                value: "0",
              },
              {
                label:
                  "Reporting as a result inputs actions (SWITCH MULTILEVEL)",
                value: "1",
              },
              {
                label: "Reporting as a result inputs actions (COLOUR_CONTROL)",
                value: "2",
              },
            ],
          },
          {
            genre: "config",
            index: "43",
            instance: "1",
            label: "Reporting 0-10v analog inputs change threshold",
            max: "100",
            min: "1",
            type: "byte",
            units: "*0.1V",
            value: "5",
            Help:
              "Parameter defines a value by which input voltage must change in order to be reported to the main controller. New value is calculated based on last reported value: Default setting: 5 (0.5V).  Range: 1->100 - (0.1V->10V).",
          },
          {
            genre: "config",
            index: "44",
            instance: "1",
            label: "Power load reporting frequency",
            max: "65534",
            min: "1",
            type: "short",
            units: "s",
            value: "30",
            Help:
              "Sent if last reported value differs from the current value. Reports will also be sent in case of polling. Default setting: 30 (30s).  Range: 1->65534 (1s->65534s) - interval between reports.  Zero means reports are only sent in the case of polling, or at turning OFF the device",
          },
          {
            genre: "config",
            index: "45",
            instance: "1",
            label: "Reporting changes in energy consumed by controlled devices",
            max: "254",
            min: "1",
            type: "byte",
            units: "*0.01kWh",
            value: "10",
            Help:
              "Interval between energy consumption reports (in kWh). New reported energy consumption value is calculated based on last reported value. 1->254 (0.01kWh->2.54kWh).  Zero means changes in consumed energy will not be reported, except in case of polling.",
          },
          {
            genre: "config",
            index: "71",
            instance: "1",
            label: "Response to BRIGHTNESS set to 0%",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Set whether to remember the previous RGB mix after the brightness has fallen to zero (black)",
            Item: [
              {
                label:
                  "Illumination colour set to white (all channels controlled together)",
                value: "0",
              },
              { label: "Last set colour is memorized", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "72",
            instance: "1",
            label: "Starting predefined program",
            max: "10",
            min: "1",
            type: "byte",
            units: "",
            value: "1",
            Help:
              "First predefined program to use when device is set to work in RGB/RGBW mode (parameter 14)",
          },
          {
            genre: "config",
            index: "73",
            instance: "1",
            label: "Triple Click Action",
            size: "1",
            type: "list",
            value: "0",
            Help: "Behaviour when an input is triple-clicked",
            Item: [
              { label: "NODE INFO control frame is sent", value: "0" },
              { label: "Start favourite program", value: "1" },
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
                auto: "false",
                index: "1",
                label: "Input 1",
                max_associations: "5",
              },
              { index: "2", label: "Input 2", max_associations: "5" },
              { index: "3", label: "Input 3", max_associations: "5" },
              { index: "4", label: "Input 4", max_associations: "5" },
              {
                auto: "true",
                index: "5",
                label: "Lifeline",
                max_associations: "1",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
