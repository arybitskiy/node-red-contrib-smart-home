import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          { text: "ZW175 Smart Switch 7", name: "Name" },
          {
            text:
              "Elegant appearance, small size, easy to use, friendly operation.\n            Support power metering function, with high measurement accuracy, and more accurate knowledge of the power consumption of the load.\n            Support over-current, over-load and over-heat protection, which is more secure and reliable.\n            Support scene personalization and is more intelligent.\n            Support Night Light Mode to reduce light pollution.\n            Support S2 Security, which is safer and more reliable.\n            Support SmartStart, making inclusion more convenient.",
            name: "Description",
          },
          {
            text: "http://www.openzwave.com/device-database/0371:00af:0003",
            name: "OzwInfoPage",
          },
          {
            text: "https://products.z-wavealliance.org/products/3437",
            name: "ProductPage",
          },
          {
            text: "https://products.z-wavealliance.org/products/3437",
            name: "ProductSupport",
          },
          { text: "images/aeotec/zw195.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3437",
            name: "ProductManual",
          },
          { text: "N/A", name: "WakeupDescription" },
          {
            text:
              "1. Set your Z-Wave Controller into its 'Add Device' mode in order to add the product into your Z-Wave system. Refer to the Controller's manual if you are unsure of how to perform this step.\n            2. Make sure the product is powered. If not, plug it into a wall socket and power on; its LED will be breathing blue light all the time.\n            3. Click Action Button once, it will quickly flash blue light for 30 seconds until it is added into the network. It will become constantly bright yellow light after being assigned a NodeID.\n            4. If your Z-Wave Controller supports S2 encryption, enter the first 5 digits of DSK into your Controller's interface if /when requested. The DSK is printed on its housing.\n            5. If Adding fails, it will bright red light for 2s and then become breathing blue light; repeat steps 1 to 4. Contact us for further support if needed.\n            6. If Adding succeeds, it will bright blue light for 2s and then turn to Load Indicator Mode. Now, this product is a part of your Z-Wave home control system. You can configure it and its automations via your Z-Wave system; please refer to your software's user guide for precise instructions.",
            name: "InclusionDescription",
          },
          {
            text:
              "1. Set your Z-Wave Controller into its 'Remove Device' mode in order to remove the product from your Z-Wave system. Refer to the Controller's manual if you are unsure of how to perform this step.\n            2. Make sure the product is powered. If not, plug it into a wall socket and power on. 3. Click Action Button 2 times quickly; it will bright violet light, up to 2s.\n            4. If Removing fails, it will bright red light for 2s and then turn back to Load Indicator Mode; repeat steps 1 to 3. Contact us for further support if needed.\n            5. If Removing succeeds, it will become breathing blue light. Now, it is removed from Z-Wave network successfully.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Make sure the product is powered. If not, plug it into a wall socket and power on. To complete the reset process manually, press and hold the Action Button for at least 15s and then release. The LED indicator will become breathing blue light, which indicates the reset operation is successful. Otherwise, please try again.",
            name: "ResetDescription",
          },
          {
            text: "https://products.z-wavealliance.org/products/3437",
            id: "00af",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text: "CEPT (Europe)",
            id: "00af",
            name: "FrequencyName",
            type: "0003",
          },
          { text: "ZW175-C16", id: "00af", name: "Identifier", type: "0003" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Add ZW175 Smart Switch 7",
                author: "Jean-Francois Auger - nechry@gmail.com",
                date: "01 July 2019",
                revision: 1,
              },
              {
                text: "Change refresh on node info frame",
                author: "Jean-Francois Auger - nechry@gmail.com",
                date: "03 July 2019",
                revision: 2,
              },
              {
                text:
                  "Fix description on configuration parameters 101 and 111 (power reporting)",
                author: "Gert van Dijk - gertvdijk@gmail.com",
                date: "09 January 2020",
                revision: 3,
              },
            ],
          },
        ],
      },
    ],
    Protocol: [{ refreshonnodeinfoframe: "true" }],
    CommandClass: [
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "4",
            label: "Over-load protection",
            max: "2415",
            min: "0",
            size: "2",
            type: "short",
            units: "",
            value: "2415",
            Help:
              "\n                Define a threshold power and automatically turn off switch when the load connected bypasses the maximum allowed power regardless of always on setting.\n                Note:\n                Over-load protection will be active if the load power exceeds the setting and lasts for more than 30s.\n                If be active, Indicator Light will become red light blinking and the product will send out Notification Report (Over-load detected), and disable the function that manually or RF control the switch state until users set Protection State to be unprotected through the Gateway or Controller.\n                Even power off will still keep Protection State.\n            ",
          },
          {
            genre: "config",
            index: "8",
            label: "Alarm Response",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n                Enabled by (Alarm Settings), and determines what the switch does in the case an alarm is triggered.\n                Note:\n                When receives any alarm enabled by Alarm Settings, Indicator Light will keep blinking based on Parameter 18.\n                It will prohibit user from manually or RF control the switch state until the alarm is disable.\n            ",
            Item: [
              { label: "Disable, no reaction to alarm settings", value: "0" },
              { label: "Switch is ON", value: "1" },
              { label: "Switch is OFF", value: "2" },
              {
                label:
                  "Switch will turn ON in 5 seconds, and then turn OFF in 5 seconds in a cycle until user disables the alarm manually",
                value: "3",
              },
            ],
          },
          {
            genre: "config",
            index: "9",
            label: "Alarm Settings",
            max: "32513",
            min: "0",
            size: "2",
            type: "short",
            units: "",
            value: "0",
            Help:
              "\n                Determine if alarms are enabled in Switch, and what Switch will react to which alarm.\n                The format of the parameter is Bit field (Checkboxes).\n                The parameter MUST be treated as a bit field where each individual bit can be set or reset.\n                A graphical configuration tool SHOULD present this parameter as a series of checkboxes.\n            ",
          },
          {
            genre: "config",
            index: "10",
            label: "Setting to disable alarm",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            units: "",
            value: "0",
            Help:
              "\n                Determines the method of disabling the alarm of the device.\n                Note: Power off will also disable the alarm response without any limitation.\n\n                0=> Can be disabled by 3x tapping Action Button within 1 second.\n                1=> Can be disabled when receives a State Idle corresponding to the alarm.\n                Note: If Access Control is enable, it also can be disabled when receives the reversal state of window/door.\n                10..255=> Sets the duration of the alarm in seconds(i.e. Customer sets this setting to 50, the alarm state of the Switch will disable after 50 seconds)\n            ",
          },
          {
            genre: "config",
            index: "18",
            label: "LED blinking frequency",
            max: "9",
            min: "1",
            size: "1",
            type: "byte",
            units: "",
            value: "2",
            Help:
              "\n                Set amount of blinks per seconds.\n                Note: When receiving the enable Alarm, it will flash according to the blink frequency configured by this parameter until the Alarm is disable.\n                Brightness level and color is based on current indicator.\n                If the value of brightness level and color is 0, it will flash based on last visible color.\n            ",
          },
          {
            genre: "config",
            index: "19",
            label: "Start or stop LED blinking",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            units: "",
            value: "0",
            write_only: "true",
            Help:
              "\n                Note: The parameter can be used to test the effect of LED blinking.\n                0=> Stop blinking.\n                1..255=> Set the duration and start the blinking process.\n                * This sets the timeframe of blinking in seconds.\n                * Once the duration ends, the blinking will stop.\n            ",
          },
          {
            genre: "config",
            index: "20",
            label: "Action in case of power out",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help: "Configure the output load status after re-power on.",
            Item: [
              { label: "Last status", value: "0" },
              { label: "Switch is on", value: "1" },
              { label: "Switch is off", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "80",
            label: "Lifeline Notification report",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "2",
            Help:
              "Defines the automated status notification of an associated device when status changes",
            Item: [
              { label: "None", value: "0" },
              { label: "Basic Report", value: "1" },
              { label: "Binary Switch Report", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "81",
            label: "Load Indicator Mode setting",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "2",
            Help:
              "Configuring brightness and color of Indicator Light in different time/status of different modes will be saved in the current setting mode.",
            Item: [
              { label: "Disable Mode", value: "0" },
              { label: "Night Light Mode", value: "1" },
              { label: "ON/OFF Mode", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "82",
            label: "Configure the enable and disable time of Night Light Mode",
            max: "1",
            min: "0",
            size: "4",
            type: "int",
            units: "",
            value: "301991936",
            Help:
              "\n                Value1: Enable Hour. Valid value are 0-23 and 127. Value 127 means use last valid setting.\n                Value2: Enable Minute. Valid value are 0-59 and 255. Value 255 means use last valid setting.\n                Value3: Disable Hour. Valid value are 0-23 and 255. Value 255 means use last valid setting.\n                Value4: Disable Minute. Valid value are 0-59 and 255. Value 255 means use last valid setting.\n            ",
          },
          {
            genre: "config",
            index: "91",
            label: "Threshold Power for inducing automatic report",
            max: "2300",
            min: "0",
            size: "2",
            type: "short",
            units: "watts",
            value: "0",
            Help:
              "\n                0 => Disable.\n                1-2300 => 1-2300W.\n            ",
          },
          {
            genre: "config",
            index: "92",
            label: "Threshold Power Consumption for inducing automatic report",
            max: "10000",
            min: "0",
            size: "2",
            type: "short",
            units: "kWh",
            value: "0",
            Help:
              "\n                0 => Disable.\n                1-10000 => 1-10000kWh.\n            ",
          },
          {
            genre: "config",
            index: "93",
            label: "Threshold Current for inducing automatic report",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            units: "0.1A",
            value: "0",
            Help:
              "\n                0 => Disable.\n                1-100 => 0.1-10A.\n            ",
          },
          {
            genre: "config",
            index: "101",
            label:
              "Configure which meter reading will be periodically report via Lifeline",
            type: "int",
            units: "",
            value: "15",
            Help:
              "\n                Defines the type of report sent for reporting group 1.\n                1 is meter report for kilowatts.\n                2 is meter report for watts.\n                4 is meter report for voltage.\n                8 is meter report for current.\n                Value 1 (msb) Reserved\n                Value 2 Reserved\n                Value 3 Reserved\n                Value 4 (lsb) bits 7-4 reserved\n                bit 3 Current\n                bit 2 Voltage\n                bit 1 Power\n                bit 0 Power Consumption\n            ",
          },
          {
            genre: "config",
            index: "111",
            label: "Configure the sending frequency of Meter Report",
            max: "2592000",
            min: "0",
            type: "int",
            units: "seconds",
            value: "600",
            Help:
              "\n                0 => Disable.\n                30..2592000 => 30-2592000s. (30seconds-30day)\n            ",
          },
          {
            genre: "config",
            index: "255",
            label: "Reset To Factory Defaults",
            size: "4",
            type: "list",
            value: "1",
            write_only: "true",
            Help: "Reset to factory defaults",
            Item: [
              { label: "Initialization", value: "1" },
              { label: "Factory Reset", value: "1431655765" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "LifeLine", max_associations: "5" },
              {
                index: "2",
                label: "Retransmit Switch CC",
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
