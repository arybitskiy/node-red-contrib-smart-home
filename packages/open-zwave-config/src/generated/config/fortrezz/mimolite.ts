import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0084:0111:0453",
            name: "OzwInfoPage",
          },
          { text: "images/fortrezz/mimolite.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1756/",
            id: "0111",
            name: "ZWProductPage",
            type: "0453",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0111",
            name: "FrequencyName",
            type: "0453",
          },
          { text: "MIMOlite", id: "0111", name: "Identifier", type: "0453" },
          { text: "MIMOlite", name: "Name" },
          {
            text:
              "Make virtually anything speak Z-wave™!  The MiMOlite Module is an interface / bridge module, capable of converting a wire or wireless input to a wire or wireless output.  It provides one relay to wirelessly control low voltage applications & one signal input to connect a digital, analog, or pulse signal into your Z-waveTM network.\n\nCommon Applications\n\n    Garage Doors & Motorized Gates\n    Wired Door Bells / Chimes\n    Control Solenoids\n    Connect to existing wired buttons\n    Security Panel Zone-in\n    Motorized Shades\n    Connect to various wired sensors including Temperature probes, Soil Moisture probes, Float switches, Level Sensors, Reed Switches, Door / Window sensors, etc.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1756/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 5,
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
            index: "2",
            label: "Clear Pulse Meter Counts",
            max: "255",
            min: "0",
            type: "button",
            units: "",
            value: "0",
            write_only: "true",
            Help:
              "\n\t\t\t\tClear Pulse Meter Counts (actual value is dont care; count gets reset whenever\n\t\t\t\tthis command is received regardless of value). This parameter is for SIG1 only.\n\t\t\t",
          },
          {
            genre: "config",
            index: "3",
            label: "Trigger Mapping",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n\t\t\t\tSIG1 triggered/untriggered sets or clears Relay1. \n\t\t\t\tRefer to description in User Manual under section, Input to Relay Mapping. Note\n\t\t\t\tthat neither a Basic Report nor a Binary Switch Report is sent when relay is\n\t\t\t\tautomatically set or cleared by Trigger Mapping. Only applies to the Relay1 output.\n\t\t\t",
          },
          {
            genre: "config",
            index: "4",
            label: "Lower Threshold, High",
            max: "255",
            min: "0",
            type: "byte",
            value: "187",
            Help:
              "\n\t\t\t\tSIG1 high lower threshold. \n\t\t\t\tMust be less than Upper Threshold Low and greater than Lower Threshold Low.\n\t\t\t",
          },
          {
            genre: "config",
            index: "5",
            label: "Lower Threshold, Low",
            max: "255",
            min: "0",
            type: "byte",
            value: "171",
            Help: "\n\t\t\t\tSIG1 low lower threshold.\n\t\t\t",
          },
          {
            genre: "config",
            index: "6",
            label: "Upper Threshold, High",
            max: "255",
            min: "0",
            type: "byte",
            value: "255",
            Help: "\n\t\t\t\tSIG1 high upper threshold.\n\t\t\t",
          },
          {
            genre: "config",
            index: "7",
            label: "Upper Threshold, Low",
            max: "255",
            min: "0",
            type: "byte",
            value: "254",
            Help:
              "\n\t\t\t\tSIG1 low upper threshold.\n\t\t\t\tMust be greater than Lower Threshold High and less than Upper Threshold High.\n\t\t\t",
          },
          {
            genre: "config",
            index: "8",
            label: "Input Flags",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "3",
            Help:
              "\n\t\t\t\tBits 7 - 2 are ignored and should be set to 0\n\n\t\t\t\tBit1 : Digital-Configuration flag\n\t\t\t\t\t1=Set Trigger levels for this channel to digital thresholds (approx. 1V); Default\n\t\t\t\t\t0=Set Trigger levels to analog thresholds (see parameters 4 through 7)\n\n\t\t\t\tBit0 : Trigger-Between-Thresholds flag (see below)\n\t\t\t\t\t1 = Set to triggered when input falls between thresholds; Default\n\t\t\t\t\t0 = Set to triggered when input falls outside of thresholds\n\t\t\t",
            Item: [
              {
                label: "Trigger outside thresholds, analog trigger thresholds",
                value: "0",
              },
              {
                label: "Trigger between thresholds, analog trigger thresholds",
                value: "1",
              },
              {
                label: "Trigger outside thresholds, digital trigger thresholds",
                value: "2",
              },
              {
                label: "Trigger between thresholds, digital trigger thresholds",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "9",
            label: "Sensor/Pulse Report Interval",
            max: "255",
            min: "0",
            type: "byte",
            units: "10 minutes",
            value: "3",
            Help:
              "\n\t\t\t\tPeriodic send interval of Multilevel Sensor Reports (Association Group 2) and/or\n\t\t\t\tPulse Count Reports (Association Group 5) for SIG1. This parameter has a resolution\n\t\t\t\tof 10 seconds; for example, 1 = 10 seconds, 2 = 20 seconds, 3 = 30 seconds (Default),\n\t\t\t\t... 255 = 2550 seconds = 42.5 minutes. A value of 0 disables automatic reporting.\n\t\t\t",
          },
          {
            genre: "config",
            index: "11",
            label: "Momentary Relay1 enable/disable",
            max: "255",
            min: "0",
            type: "byte",
            units: "100 msec",
            value: "0",
            Help:
              "\n\t\t\t\tMomentary Relay1 output enable/disable.\n\t\t\t\t1..255 = enable / value sets the approximate momentary on time in increments\n\t\t\t\tof 100msec.\n\t\t\t",
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
                label: "Input trigger Basic Set report",
                max_associations: "2",
              },
              {
                auto: "true",
                index: "2",
                label: "MultiLevel Sensor report",
                max_associations: "2",
              },
              {
                index: "3",
                label: "Power dropout Alarm",
                max_associations: "2",
              },
              {
                auto: "true",
                index: "4",
                label: "Input trigger Binary Sensor report",
                max_associations: "2",
              },
              {
                index: "5",
                label: "Pulse meter counts",
                max_associations: "2",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
