import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0175:0011:0001",
            name: "OzwInfoPage",
          },
          { text: "images/devolo/mt2646.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1129/",
            id: "0011",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text:
              "(Use this procedure only in the event that the primary controller is lost or otherwise inoperable.)\n\n1.  Pressing On/Off button three times within 2 seconds will enter inclusion mode on the switch.\n2.  Within 1 second, press On/Off button again for 5 seconds.",
            name: "ResetDescription",
          },
          { text: "MT02646", id: "0011", name: "Identifier", type: "0001" },
          { text: "Metering Plug", name: "Name" },
          {
            text:
              "This plug-in ON/OFF switch Home Control Metering Plug is a security enabled wireless switch, based on Z-Wave Plus technology. Z-Wave Plus™   enabled devices displaying  the  Z-Wave Plus™ logo can also be used with   it regardless of the manufacturer, and can also be used in other manufacturer’s Z-Wave™ enabled networks. Remote On/Off control of the connected load is possible with other manufacturer’s wireless Controller. Each switch is designed to act as a repeater. Repeaters will re-transmit the RF signal to ensure that the signal is received by its\nintended destination by routing the signal around obstacles and radio dead spots. Because Home Control Metering Plug supports Security Command Class, it can be added with a Secured controller. Its functionality and supported command classes is identical when included as a secure and non-secure device. \nThis plug-in ON/OFF switch is able to detect instance wattage   (3000W/CE/CN,1500W/UL/TW/JP) and overload current (14.5A) of connected lights or appliances. When detecting overload state, the Switch will be disabled and its On/Off button will be lockout of which LED will flash quickly.   However, unplug and re-connect the switch will reset its overload condition to normal status.",
            name: "Description",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1129/PAN11-1B manual-20140816.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1.  Put your Z-Wave controller into inclusion mode by following the instructions provided by the controller manufacturer. \n2.  Pressing On/Off button three times within 2 seconds will enter inclusion \n     mode on the switch.",
            name: "InclusionDescription",
          },
          {
            text:
              "1.  Put your Z-Wave controller into exclusion mode by following the instructions provided by the controller manufacturer. \n2.  Pressing On/Off button three times within 2 seconds will enter exclusion \n     mode on the switch.",
            name: "ExclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0011",
            name: "FrequencyName",
            type: "0001",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1129/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 4,
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
            label: "Watt Meter Report Period",
            max: "32767",
            min: "1",
            type: "short",
            value: "720",
            Help:
              "\n          0 Disable automatic interval meter reporting of Watts.\n          1 to 32767 Enable automatic interval reporting with an interval of 5 * the value.\n\t  ",
          },
          {
            genre: "config",
            index: "2",
            label: "KWH Meter Report Period",
            max: "32767",
            min: "1",
            type: "short",
            value: "6",
            Help:
              "\n          0 Disable automatic interval meter kWh reporting.\n          If the setting is configured for 1hour (set value =6), the Home Control Metering Plug will report its Accumulated Power Consumption (KW/h) every 1 hour to Group1 node. The maximum interval to report its Accumulated Power Consumption (KW/h) is 227.55 days (10min*32767/1440=227.55 days).\n    ",
          },
          {
            genre: "config",
            index: "3",
            label: "Threshold of current for Load caution",
            max: "1300",
            min: "10",
            type: "short",
            value: "1300",
            Help:
              "\n          This is a warning when the current of load over the preset threshold value, if the setting value is 1300, when the load current of Relay1 over this value, Home Control Metering Plug will send current meter report to warn the Group1 node, the Range of the setting value is from 10 to 1300,and the default value is 1300.\n    ",
          },
          {
            genre: "config",
            index: "4",
            label: "Threshold of KWh for Load caution",
            max: "10000",
            min: "1",
            type: "short",
            units: "KWh",
            value: "1000",
            Help:
              "\n          0 Disable kWh Load Caution Reporting\n          1 to 10000 Enable automatic warning when the accumulated kWh power consumption exceeds the setting value from 1KWh to 10000KWh.\n    ",
          },
          {
            genre: "config",
            index: "5",
            label: "Restore switch state mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n          Whenever the AC power return from lost, Home Control Metering Plug will restore the switch state which could be SWITCH OFF, LAST SWITCH STATE, SWITCH ON. The default setting is LAST SWITCH STATE.\n      ",
            Item: [
              { label: "Switch Off", value: "0" },
              { label: "Last switch state", value: "1" },
              { label: "Switch On", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "6",
            label: "Mode of Switch Off function",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "\n            When the mode of switch On/Off is set to 0, any command of switch off will be disabled and the On/Off function of include button will be disabled. The default setting is enable mode.\n      ",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "7",
            label: "LED indication mode",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "0",
            Help: "\n          LED indication mode\n      ",
            Item: [
              { label: "Switch state", value: "1" },
              { label: "Night Mode", value: "2" },
              { label: "One flash mode", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "8",
            label: "Auto off timer",
            max: "32767",
            min: "0",
            type: "short",
            units: "second",
            value: "0",
            Help:
              "\n          0 Disable the auto off function.\n          1 to 32767 1s to 32767s for automatically turning off.\n    ",
          },
          {
            genre: "config",
            index: "9",
            label: "RF off command mode",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "0",
            Help:
              "\n          Whenever a switch off command,BASIC_SET, BINARY_SWITCH_SET, SWITCH_ALL_OFF, is received, it could be interpreted as a variety of 4 commands.\n      ",
            Item: [
              { label: "Switch Off", value: "0" },
              { label: "Ignore", value: "1" },
              { label: "Switch toggle", value: "2" },
              { label: "Switch On", value: "3" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [{ index: "1", label: "Lifeline", max_associations: "1" }],
          },
        ],
      },
    ],
  },
};

export default config;
