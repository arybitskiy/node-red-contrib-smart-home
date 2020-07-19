import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 1,
    MetaData: [
      {
        MetaDataItem: [
          { text: "MH-P511 Touch Panel Dimmer Switch", name: "Name" },
          {
            text:
              "MCOHome Touch Panel Dimmer Switch is a wall switch with built-in dimmer & Z-Wave module together in one compact unit. It supports basic command class，association command class, which can control all associated devices synchronously. This product can be included and operated in any Z-Wave network with other Z-Wave certified devices from any other manufacturers.",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/015f:1453:511a",
            name: "OzwInfoPage",
          },
          {
            text: "http://www.mcohome.com/show_list.php?id=13&sid=47",
            name: "ProductPage",
          },
          {
            text: "http://www.mcohome.com/show_list.php?id=17&pcate=13&mid=47",
            name: "ProductSupport",
          },
          { text: "images/mcohome/mhp511.png", name: "ProductPic" },
          {
            text:
              "https://smarthome.hancan.com.au/wp-content/uploads/2018/02/MH-P511_UM_V.02.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Press the key on the panel 3 times in quick succession (within approx 1.5sec)",
            name: "InclusionDescription",
          },
          {
            text:
              "Press the key on the panel 3 times in quick succession (within approx 1.5sec)",
            name: "ExclusionDescription",
          },
          {
            text: "Write 0x55 to Configuration Parameter Index 255",
            name: "ResetDescription",
          },
          {
            text: "Australia / New Zealand",
            id: "1453",
            name: "FrequencyName",
            type: "511a",
          },
          { text: "MH-P511-AU", id: "1453", name: "Identifier", type: "511a" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial creation of config file from import of data from User Manual",
                author: "StuartW - swish@email4me.com",
                date: "11 June 2019",
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
            label: "Dimmer state saved or not when power down",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "Dimmer state saved or not when power down",
            Item: [
              {
                label: "Not Saved. Dimmer will be off when powered again",
                value: "0",
              },
              {
                label:
                  "Saved. Dimmer will keep the same state when powered again",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Beep",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "Beep",
            Item: [
              { label: "Beep disabled", value: "0" },
              { label: "Beep enabled", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "3",
            label: "LED Backlit brightness level",
            max: "10",
            min: "0",
            type: "byte",
            units: "%",
            value: "10",
            Help:
              "\n      LED Backlit brightness level.\n      0 = Off;\n      10 = Max brightness\n      ",
          },
          {
            genre: "config",
            index: "4",
            label: "All On / All Off",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "255",
            Help: "All On / All Off",
            Item: [
              { label: "forbid ALL ON, forbid ALL OFF", value: "0" },
              { label: "forbid ALL ON, allow ALL OFF", value: "1" },
              { label: "allow ALL ON, forbid ALL OFF", value: "2" },
              { label: "allow ALL ON, allow ALL OFF", value: "255" },
            ],
          },
          {
            genre: "config",
            index: "5",
            label: "Minimum brightness level",
            max: "98",
            min: "1",
            type: "byte",
            units: "%",
            value: "1",
            Help:
              "Minimum brightness level (should be less than Maximum brightness level)",
          },
          {
            genre: "config",
            index: "6",
            label: "Maximum brightness level",
            max: "99",
            min: "2",
            type: "byte",
            units: "%",
            value: "99",
            Help:
              "Maximum brightness level (should be greater than Minimum brightness level)",
          },
          {
            genre: "config",
            index: "7",
            label: "Manual single dimming step time",
            max: "255",
            min: "1",
            type: "short",
            units: "ms",
            value: "3",
            Help:
              "\n      Manual single dimming step time, in 10ms steps.\n      Manual control achieved by holding external button.\n      ",
          },
          {
            genre: "config",
            index: "8",
            label: "Manual single dimming step size",
            max: "99",
            min: "1",
            type: "byte",
            units: "%",
            value: "1",
            Help:
              "\n      Manual single dimming step size.\n      Manual control achieved by holding external button.\n      Modification isn’t recommended!\n      ",
          },
          {
            genre: "config",
            index: "9",
            label: "Auto single dimming step time",
            max: "255",
            min: "1",
            type: "short",
            units: "ms",
            value: "3",
            Help:
              "\n      Auto single dimming step time, in 10ms steps.\n      Auto control achieved by double click external button.\n      ",
          },
          {
            genre: "config",
            index: "10",
            label: "Auto single dimming step size",
            max: "99",
            min: "1",
            type: "byte",
            units: "%",
            value: "1",
            Help:
              "\n      Auto single dimming step size.\n      Auto control achieved by double click external button.\n      Modification isn’t recommended!\n      ",
          },
          {
            genre: "config",
            index: "11",
            label: "Timer function (Auto-off)",
            max: "255",
            min: "1",
            type: "short",
            units: "s",
            value: "0",
            Help:
              "\n      Timer function (Auto-off).\n      0 = function disabled\n      1 - 255 = 1s - 255s auto-off delay\n      ",
          },
          {
            genre: "config",
            index: "13",
            label: "One click of S1",
            max: "99",
            min: "1",
            type: "byte",
            units: "%",
            value: "99",
            Help:
              "\n      One click of external button (S1).\n      0 = either (switch Off) or (switch On to last saved brightness level)\n      1 - 99 = either (switch Off) or (switch On to set percentage brightness level)\n      ",
          },
          {
            genre: "config",
            index: "14",
            label: "Double click of S1",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help: "Double click of external button (S1)",
            Item: [
              { label: "Function disabled", value: "0" },
              { label: "Goto maximum brightness level", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "15",
            label: "Operation report from S1 to association group 2 & 3",
            max: "130",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "\n      Operation report from external button (S1) to Association Group 2 & 3\n      Device send Basic Set to AG2; Send Multilevel Set to AG3\n      ",
            Item: [
              {
                label:
                  "Report all operations to association groups 2 & 3, but not while dimming",
                value: "0",
              },
              {
                label: "Only report when switching OFF, but not while dimming",
                value: "1",
              },
              {
                label: "Only report when switching ON, but not while dimming",
                value: "2",
              },
              {
                label:
                  "Report all operations to association groups 2 & 3, including while dimming",
                value: "128",
              },
              {
                label:
                  "Only report when switching OFF, including while dimming",
                value: "129",
              },
              {
                label: "Only report when switching ON, including while dimming",
                value: "130",
              },
            ],
          },
          {
            genre: "config",
            index: "16",
            label: "Operation report from S1 to association group 2",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Operation report from external button (S1) to Association Group 2",
            Item: [
              {
                label: "When Basic Set On sent, Brightness value is 0xFF",
                value: "0",
              },
              {
                label:
                  "When Basic Set On sent, Brightness value is Current Dimmer Value",
                value: "1",
              },
            ],
          },
          {
            genre: "config",
            index: "19",
            label: "Scene ID sent to AG1 when one click of S1",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n      0 = Scene Activation disabled\n      1 - 255 = send Activation CC to AG1 with specified Scene ID\n      ",
          },
          {
            genre: "config",
            index: "20",
            label: "Scene ID sent to AG1 when double click of S1",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n      For momentary button only\n      0 = Scene Activation disabled\n      1 - 255 = send Activation CC to AG1 with specified Scene ID\n      ",
          },
          {
            genre: "config",
            index: "21",
            label: "Scene ID sent to AG1 when hold S1",
            max: "255",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n      For momentary button only\n      0 = Scene Activation disabled\n      1 - 255 = send Activation CC to AG1 with specified Scene ID\n      ",
          },
          {
            genre: "config",
            index: "255",
            label: "Restore factory setting",
            max: "85",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Restore factory setting",
            Item: [
              { label: "Normal", value: "0" },
              { label: "Reset to factory defaults", value: "85" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Dimmer State", max_associations: "1" },
              {
                index: "2",
                label: "S1 Basic Set Command",
                max_associations: "5",
              },
              {
                index: "3",
                label: "S1 Multi-level Set Command",
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
