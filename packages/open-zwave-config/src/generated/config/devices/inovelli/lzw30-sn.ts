import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 7,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/031E:0001:0002",
            name: "OzwInfoPage",
          },
          { text: "images/inovelli/lzw30-sn.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3451",
            id: "0001",
            name: "ZWProductPage",
            type: "0002",
          },
          {
            text:
              "https://inovelli.com/shop/smart-light-switches/zwave-smart-switches-gen2/z-wave-on-off-switch-neutral-required-scenes-notifications/",
            name: "ProductPage",
          },
          {
            text:
              "https://inovelli.com/shop/smart-light-switches/zwave-smart-switches-gen2/z-wave-on-off-switch-neutral-required-scenes-notifications/",
            name: "ProductSupport",
          },
          {
            text:
              "To Exclude your switch, put your HUB in exclusion mode and press the Configuration Button three (3) times.",
            name: "ExclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0001",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text:
              "https://products.z-wavealliance.org/ProductManual/File?folder=&filename=MarketCertificationFiles/3451/LZW30-SN%20Manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "You may factory reset the switch by holding down the Config Button for twenty (20) or more seconds. The LED Bar will turn Red and blink three (3) times to confirm.\n\nHowever, we recommend using a certified Z-Wave controller to remove the device from your network for factory resetting the switch.\n\nOnly use either of these procedures in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "The Inovelli Red Series On/Off is a Z-Wave in-wall switch that controls attached LED, CFL, & Incandescent lighting which can be highly customized to your liking at the switch itself with our unique config button and advanced firmware. In addition, the Red Series comes with advanced features such as scene support, power monitoring, notifications, local protection, etc.",
            name: "Description",
          },
          { text: "LZW30-SN Switch", name: "Name" },
          { text: "LZW30-SN", id: "0001", name: "Identifier", type: "0002" },
          {
            text:
              "To include your switch, start the inclusion process on your HUB and tap the Configuration Button three (3) times.\n\nPlease Note: If this doesn't work, you can check to see if your switch is within Z-Wave Range by holding down the Configuration Button for 5-10 seconds (if it's not within range, the LED Bar will indicate Red and if it is within Range, the LED Bar will indicate Green). If your switch indicates Red, please move the switch closer to the HUB. If your switch indicates Green, please try running an Exclusion to reset your switch.",
            name: "InclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Adding Metadata",
                author: "Eric Maycock - ericm@inovelli.com",
                date: "10 Sep 2019",
                revision: 6,
              },
              {
                text: "Remove Static Central Scene Entries - Issue #2155",
                author: "Justin Hammond",
                date: "13 Mar 2020",
                revision: 7,
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
            type: "list",
            size: "1",
            index: "1",
            label: "Power On State",
            min: "0",
            max: "2",
            value: "0",
            Help:
              "\n      When Power is restored\n      Range: 0-2\n      Default: 0\n      ",
            Item: [
              { value: "0", label: "Previous" },
              { value: "1", label: "On" },
              { value: "2", label: "Off" },
            ],
          },
          {
            genre: "config",
            type: "list",
            size: "1",
            index: "2",
            label: "Invert Switch",
            min: "0",
            max: "1",
            value: "0",
            Help:
              "\n      Inverts the orientation of the switch. Useful when the switch is installed upside down. Essentially up becomes down and down becomes up.\n      Range: 0-1\n      Default: 0\n      ",
            Item: [
              { value: "0", label: "Disabled" },
              { value: "1", label: "Enabled" },
            ],
          },
          {
            genre: "config",
            type: "short",
            size: "2",
            index: "3",
            label: "Auto Off Timer",
            min: "0",
            max: "32767",
            value: "0",
            Help:
              "\n      Automatically turns the switch off after this many seconds. When the switch is turned on a timer is started that is the duration of this setting. When the timer expires, the switch is turned off.\n      Range: 0-32767\n      Default: 0\n      ",
          },
          {
            genre: "config",
            type: "byte",
            size: "1",
            index: "4",
            label: "Association Behavior",
            min: "0",
            max: "15",
            value: "15",
            Help:
              "\n      When should the switch send commands to associated devices?  01 - local 02 - 3way 03 - 3way & local 04 - z-wave hub 05 - z-wave hub & local 06 - z-wave hub & 3-way 07 - z-wave hub & local & 3way 08 - timer 09 - timer & local 10 - timer & 3-way 11 - timer & 3-way & local 12 - timer & z-wave hub 13 - timer & z-wave hub & local 14 - timer & z-wave hub & 3-way 15 - all\n      Range: 0-15\n      Default: 15\n      ",
          },
          {
            genre: "config",
            type: "short",
            size: "2",
            index: "5",
            label: "LED Indicator Color",
            min: "0",
            max: "255",
            value: "170",
            Help:
              "\n      This is the color of the LED strip.\n      Range: 0 to 255\n      Default: 170\n      ",
          },
          {
            genre: "config",
            type: "byte",
            size: "1",
            index: "6",
            label: "LED Indicator Intensity",
            min: "0",
            max: "10",
            value: "5",
            Help:
              "\n      This is the intensity of the LED strip.\n      Range: 0-10\n      Default: 5\n      ",
          },
          {
            genre: "config",
            type: "byte",
            size: "1",
            index: "7",
            label: "LED Indicator Intensity (When Off)",
            min: "0",
            max: "10",
            value: "1",
            Help:
              "\n      This is the intensity of the LED strip when the switch is off. This is useful for users to see the light switch location when the lights are off.\n      Range: 0 - 10\n      Default: 0\n      ",
          },
          {
            genre: "config",
            type: "int",
            size: "4",
            index: "8",
            label: "LED Strip Effect",
            min: "0",
            max: "83823359",
            value: "0",
            Help:
              "\n      Please see website for documentation.\n      Range: 0-83823359\n      Default: 0\n      ",
          },
          {
            genre: "config",
            type: "byte",
            size: "1",
            index: "10",
            label: "Active Power Alerts",
            min: "0",
            max: "100",
            value: "10",
            Help:
              "\n      The power level change that will result in a new power report being sent. The value is a percentage of the previous report. 0 = disabled.\n      Range: 0-100\n      Default: 10\n      ",
          },
          {
            genre: "config",
            type: "short",
            size: "2",
            index: "11",
            label: "Periodic Power + Energy Reports",
            min: "0",
            max: "32767",
            value: "3600",
            Help:
              "\n      Time period between consecutive power & energy reports being sent (in seconds). The timer is reset after each report is sent.\n      Range: 0 to 32767\n      Default: 3600\n      ",
          },
          {
            genre: "config",
            type: "byte",
            size: "1",
            index: "12",
            label: "Energy Reports",
            min: "0",
            max: "100",
            value: "10",
            Help:
              "\n      The energy level change that will result in a new energy report being sent. The value is a percentage of the previous report.\n      Range: 0-100\n      Default: 10\n      ",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Basic_Set", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
