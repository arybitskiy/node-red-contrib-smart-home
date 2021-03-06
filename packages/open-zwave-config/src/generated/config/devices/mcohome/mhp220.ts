import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/015F:5101:220A",
            name: "OzwInfoPage",
          },
          { text: "images/mcohome/mhp220.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3011/",
            id: "5101",
            name: "ZWProductPage",
            type: "220A",
          },
          { text: "MH-P220", id: "5101", name: "Identifier", type: "220A" },
          {
            text:
              "Restoring Factory Settings:\nThe default configuration can be restored by:\n*\tSending commands through controller/gateway (the command classes which support this function is Configuration Command Class). The parameter are as follows:\n\nParameter Number\t0xFF\nSize\t1 BYTE\nDefault value\tN/A\nConfiguration value\t0x55\nSet 0xFF as 0x55 will restore Factory Settings.\n\n*\tOr press the inner button on the module 10 times in quick succession.Please use this procedure only when the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3011/MH-P220UserManual.pdf",
            name: "ProductManual",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "5101",
            name: "FrequencyName",
            type: "220A",
          },
          {
            text:
              "Remove the device from Z-Wave network:\n1. Set controller into REMOVE mode. Follow the instructions provided by the controller/gateway manufacturer.\n2.\tPress the momentary button on the device 3 times, or the connected external button S1 3 times in quick succession. \nNote: If the REMOVE is successful, the INDICATION LED will blink 6 times. If not, INDICATION LED will be solid on or off depending on switch’s state.",
            name: "ExclusionDescription",
          },
          { text: "Micro Dimmer MHP-220", name: "Name" },
          {
            text:
              "This in-wall module is with compact design as well as stable performance, which can suit for any of the installation box  and various operation situation.  It supports basic command class, and also can act as repeater regardless of vendor to increase reliability of the network.",
            name: "Description",
          },
          {
            text:
              "Add the device into Z-Wave network:\n1.\tSet controller into ADD mode. Follow the instructions provided by the controller/gateway manufacturer.\n2.\tPress the momentary button on the device 3 times, or the connected external button S1 3 times in quick succession. \nNote: If the ADD is successful, the INDICATION LED will blink 6 times. If not, INDICATION LED will be solid on or off depending on switch’s state.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - file based on 1.4 version by @tonbor PR #1853",
                author: "petergebruers - peter.gebruers@gmail.com",
                date: "11 Jul 2019",
                revision: 1,
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
            instance: "1",
            label: "Dimmer state after power down",
            max: "1",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "1",
            Help: "Dimmer state saved or not when power down",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "External switch type",
            max: "2",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "0",
            Help: "External switch type",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "2-state Switches",
            max: "1",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "1",
            Help: "2-state Switches",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "ALL ON/ALL OFF",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "255",
            Help: "ALL ON/ALL OFF",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Minimum brightness level",
            max: "98",
            min: "1",
            size: "1",
            type: "byte",
            units: "",
            value: "1",
            Help: "Minimum brightness level",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Maximum brightness level",
            max: "99",
            min: "2",
            size: "1",
            type: "byte",
            units: "",
            value: "99",
            Help: "Maximum brightness level",
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Single dimming step time(Manual)",
            max: "255",
            min: "1",
            size: "2",
            type: "short",
            units: "",
            value: "3",
            Help: "Single dimming step time(Manual)",
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Single dimming step size (Manual)",
            max: "99",
            min: "1",
            size: "1",
            type: "byte",
            units: "",
            value: "1",
            Help: "Single dimming step size (Manual)",
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "Single dimming step time (Auto)",
            max: "255",
            min: "1",
            size: "2",
            type: "short",
            units: "",
            value: "3",
            Help: "Single dimming step time (Auto)",
          },
          {
            genre: "config",
            index: "10",
            instance: "1",
            label: "Single dimming step size (Auto)",
            max: "99",
            min: "1",
            size: "1",
            type: "byte",
            units: "",
            value: "1",
            Help: "Single dimming step size (Auto)",
          },
          {
            genre: "config",
            index: "11",
            instance: "1",
            label: "Timer function (Auto-off)",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            units: "",
            value: "0",
            Help: "Timer function (Auto-off)",
          },
          {
            genre: "config",
            index: "13",
            instance: "1",
            label: "One click of S1",
            max: "99",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "99",
            Help: "One click of S1",
          },
          {
            genre: "config",
            index: "14",
            instance: "1",
            label: "Double click of S1",
            max: "1",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "1",
            Help: "Double click of S1",
          },
          {
            genre: "config",
            index: "15",
            instance: "1",
            label: "Operation report Switch1 to Assoc Group 2 and 3",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "0",
            Help: "Operation report from Switch1 to Association Group 2 and 3",
          },
          {
            genre: "config",
            index: "16",
            instance: "1",
            label: "Operation report Switch1 to Association Group 2",
            max: "1",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "1",
            Help: "Operation report from Switch1 to Association Group 2",
          },
          {
            genre: "config",
            index: "17",
            instance: "1",
            label: "Switch 2 function",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "1",
            Help: "Switch 2 function",
          },
          {
            genre: "config",
            index: "18",
            instance: "1",
            label: "Operation report Switch2 to Association Group 4",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "0",
            Help: "Operation report from Switch2 to Association Group 4",
          },
          {
            genre: "config",
            index: "19",
            instance: "1",
            label: "Scene ID sent to AG1 when one click of S2",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "0",
            Help: "Scene ID sent to AG1 when one click of S2",
          },
          {
            genre: "config",
            index: "20",
            instance: "1",
            label: "Scene ID sent to AG1 double click of S2",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "0",
            Help: "Scene ID sent to AG1 when double click of S2",
          },
          {
            genre: "config",
            index: "21",
            instance: "1",
            label: "Scene ID sent to AG1 when hold S2",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "0",
            Help: "Scene ID sent to AG1 when hold S2\n      ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              {
                index: "2",
                label: "Basic Set Command S1",
                max_associations: "5",
              },
              {
                index: "3",
                label: "Multi-level Set Command",
                max_associations: "5",
              },
              {
                index: "4",
                label: "Basic Set Command S2",
                max_associations: "5",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
