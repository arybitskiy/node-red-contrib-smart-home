import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/013C:0029:0001",
            name: "OzwInfoPage",
          },
          { text: "images/philio/pan16.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3168/",
            id: "0029",
            name: "ZWProductPage",
            type: "0001",
          },
          { text: "PAN16-4", id: "0029", name: "Identifier", type: "0001" },
          { text: "Smart energy plug in switch", name: "Name" },
          {
            text:
              "1. Put your Z-Wave controller into inclusion mode by following the instructions provided by the controller manufacturer. \n2. Pressing On/Off button three times within 2 seconds will enter inclusion mode.",
            name: "InclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0029",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text:
              "1. Put your Z-Wave controller into exclusion mode by following the instructions provided by the controller manufacturer. \n2. Pressing On/Off button three times within 2 seconds will enter exclusion mode.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Use this procedure only in the event that the primary controller is lost or otherwise inoperable. \n1.  Pressing On/Off button three times within 2 seconds will enter inclusion mode. \n2.  Within 1 second, press On/Off button again for 5 seconds. \n3.  IDs are excluded.",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3168/PAN16manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "This plug-in ON/OFF switch PAN16 is a security enabled Z-Wave Plus product, based on Z-Wave Plus technology. The device will enable security mode automatically if the controller supports security mode, too. Z-Wave PlusTM enabled devices displaying the Z-Wave PlusTM logo can also be used with it regardless of the manufacturer, and can also be used in other manufacturer’s Z-WaveTM enabled networks. Remote On/Off control of the connected load is possible with other manufacturer’s wireless Controller. Each switch is designed to act as a repeater. Repeaters will re-transmit the RF signal to ensure that the signal is received by its intended destination by routing the signal around obstacles and radio dead spots. Because PAN16 supports Security Command Class, it can learn with a Secured enabled Z-Wave controller to fully utilize the device. Its functionality and supported command classes is identical when included as a secure and non-secure device. \nThis  plug-in  ON/OFF  switch  is  able  to  detect  instance  wattage  (3000W/230Vac) (13Ampere)  and  overload  current  (14.5A  with  resistive  load) of connected lights or appliances. When detecting overload state, the Switch will be disabled and its On/Off button will be lockout of which LED will flash quickly.  However, unplug and re-connect the switch will reset its overload condition to normal status. \nAdding to Z-WaveTM Network \nIn the front casing, there is an On/Off button with LED indicator which is used to toggle switch on and off or carry out inclusion, exclusion, reset or association. When first power is applied, its LED flashes on and off alternately and repeatedly at 0.5 second intervals. It implies that it has not been assigned a node ID and start auto inclusion.   \nAuto Inclusion \nThe function of auto inclusion will be executed as long as the switch does not have Node ID and just plug the switch into a wall outlet. \nNote: Auto inclusion timeout is 2 minute during which the node information of explorer frame will be emitted once several seconds. Unlike “inclusion” function as shown in the table below, the execution of auto inclusion is free from pressing the On/Off button on the Switch.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2001/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3162/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3164/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3168/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
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
            index: "1",
            instance: "1",
            label: "Watt Meter Report Period",
            max: "32767",
            min: "1",
            type: "short",
            units: "5 seconds",
            value: "720",
            Help:
              "The interval at which the device reports its instant power consumption to Group 1 nodes. Unit: 5 secs, Min: 1, Max: 32767, Default: 720 (= 1 hr)",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "kWh Meter Report Period",
            max: "32767",
            min: "1",
            type: "short",
            units: "10 minutes",
            value: "6",
            Help:
              "The interval at which the device reports its accumulated energy consumption, in kWh, to all Group 1 nodes. Unit: 10 minutes, min: 1, max: 32767, default: 6 (= 1 hr)",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Threshold of current for Load Caution",
            max: "1100",
            min: "10",
            type: "short",
            units: "0.01 ampere",
            value: "1100",
            Help:
              "When the current through the device exceeds this threshold, a current meter report will be sent to Group 1 nodes. min: 10, max: 1100, default: 1100 (= 11 A)",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Threshold of kWh for Load Caution",
            max: "10000",
            min: "1",
            type: "short",
            units: "1 kWh",
            value: "10000",
            Help:
              "When the energy consumption through the device exceeds this threshold, a kWh report will be sent to Group 1 nodes. min: 1, max: 10000, default: 10000 kWh",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Restore switch state mode",
            max: "2",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "After loss of power, device state will be set according to this parameter, default: Previous state.",
            Item: [
              { label: "Off", value: "0" },
              { label: "Previous state", value: "1" },
              { label: "On", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Mode of Switch Off function",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "When set to Disable, all commands to switch off the device are ignored, both via radio and the include button. default: Enable",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "LED indication mode",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Controls the light indicator in the device\n                Switch State: When switch is on, LED is on. When switch is off, LED is off. (default)\n                Night mode: When switch is on, LED is off. When switch is off, LED is on.\n                One flash: When the device changes state, the LED illuminates for one second.\n            ",
            Item: [
              { label: "Switch state", value: "1" },
              { label: "Night mode", value: "2" },
              { label: "One flash", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "8",
            instance: "1",
            label: "Auto off timer",
            max: "32767",
            min: "0",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "Controls the auto-off timer\n                0: The auto off timer is disabled (default)\n                1-32767: After switching on, the device will automatically switch off after this time\n            ",
          },
          {
            genre: "config",
            index: "9",
            instance: "1",
            label: "RF off command mode",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help:
              "Controls how the device reacts to the SWITCH_ALL_OFF command\n                Off: The device switches off (default)\n                Ignore: The switch off command is ignored\n                Toggle: It switches to the inverse of current state\n                On: The device switches on\n            ",
            Item: [
              { label: "Off", value: "0" },
              { label: "Ignore", value: "1" },
              { label: "Toggle", value: "2" },
              { label: "On", value: "3" },
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
