import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/013C:0011:0001",
            name: "OzwInfoPage",
          },
          { text: "images/philio/pan11.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1598/",
            id: "0011",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text: "CEPT (Europe)",
            id: "0011",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text:
              "Use this procedure only in the event that the primary controller is lost or otherwise inoperable. \n\n1.  Pressing On/Off button three times within 2 seconds will enter inclusion mode. Use this procedure only in the event that the primary controller is lost or otherwise inoperable.  \n2.  Within 1 second, press On/Off button again for 5 seconds.",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1598/PAN11-1B manual-20151204.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1. Put your Z-Wave controller into inclusion mode by following the instructions provided by the controller manufacturer. \n2. Pressing On/Off button three times within 2 seconds will enter inclusion mode.",
            name: "InclusionDescription",
          },
          { text: "Smart Energy Plug In Switch", name: "Name" },
          {
            text:
              "1. Put your Z-Wave controller into exclusion mode by following the instructions provided by the controller manufacturer. \n2. Pressing On/Off button three times within 2 seconds will enter exclusion mode.",
            name: "ExclusionDescription",
          },
          { text: "PAN11-1B", id: "0011", name: "Identifier", type: "0001" },
          {
            text:
              "This plug-in ON/OFF switch PAN11 is a security enabled wireless switch, based on Z-Wave Plus technology. Z-Wave PlusTM enabled devices displaying the Z-Wave PlusTM logo can also be used with it regardless of the manufacturer, and can also be used in other manufacturer’s Z-WaveTM enabled networks. Remote On/Off control of the connected load is possible with other manufacturer’s wireless Controller. Each switch is designed to act as a repeater. Repeaters will re-transmit the RF signal to ensure that the signal is received by its intended  destination by routing the signal around obstacles and radio dead spots. Because PAN11 supports Security Command Class, it can learn with Secured controller. Its functionality and supported command classes is identical when included as a secure and non-secure device. \n \nThis  plug-in  ON/OFF  switch  is  able  to  detect  instance  wattage  (3000W/CE/CN, 1560W/UL/TW/JP)  and  overload  current  (14.5A  with  resistive  load)  of  connected lights or appliances. When detecting overload state, the Switch will be disabled and its On/Off button will be lockout of which LED will flash quickly. However, unplug and re-connect the switch will reset its overload condition to normal status. \n\nAdding to Z-WaveTM Network \n\nIn the front casing, there is an On/Off button with LED indicator which is used to toggle switch on  and off or carry  out  inclusion,  exclusion, reset or  association. When first power is applied, its LED flashes on and off alternately and repeatedly at 0.5 second intervals. It implies that it has not been assigned a node ID and start auto inclusion.  \n\nAuto Inclusion \n\nThe function of auto inclusion will be executed as long as the switch does not have Node ID and just plug the switch into a wall outlet. \n\nNote: Auto inclusion timeout is 2 minute during which the node information of explorer frame will be emitted once several seconds. Unlike “inclusion” function as shown in the table below, the execution of auto inclusion is free from pressing the On/Off button on the Switch.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1088/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1598/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
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
            instance: "1",
            label: "Watt Meter Report Period",
            max: "32767",
            min: "1",
            size: "2",
            type: "short",
            units: "seconds",
            value: "720",
            Help:
              "If the setting is configured for 1 hour(set value=720), the device will report its instant power consumption every 1 hour to Z_Wave controller. Unit: 5 secs, Min: 1, Max: 32767, Default: 720",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "KWH Meter Report Period",
            max: "32767",
            min: "1",
            size: "2",
            type: "short",
            units: "minutes",
            value: "6",
            Help:
              "If the setting is configured for 1hour (set value =6), the PAN11 will report its Accumulated Power Consumption (KW/h) every 1 hour to Group1 node. The maximum interval to report its Accumulated Power Consumption (KW/h) is 227.55 days (10min*32767/1440=227.55 days).",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Thereshold of current for Load Caution",
            max: "1300",
            min: "10",
            size: "2",
            type: "short",
            units: "ampere",
            value: "1300",
            Help:
              "This is a warning when the current of load over the preset threshold value, if the setting value is 1300, when the load current of Relay1 over this value, PAN11 will send current meter report to warn the Group1 node, the Range of the setting value is from 10 to 1300,and the default value is 1300.",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Thereshold of KWh for Load Caution",
            max: "10000",
            min: "1",
            size: "2",
            type: "short",
            units: "KWh",
            value: "10000",
            Help:
              "This is a warning when the KWh of load over the preset threshold value, If the setting value is 10000, when the Accumulated Power Consumption of Relay1 over this value, PAN11 will send KWH meter report to warn the Group1 node, minimum value is 1KWh and default value is 10000 kWh.",
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
              "\n                Whenever the AC power return from lost, PAN11 will restore the switch state which could be SWITCH OFF, LAST SWITCH STATE, SWITCH ON. The default setting is LAST SWITCH STATE.\n            ",
            Item: [
              { label: "Switch Off", value: "0" },
              { label: "Last Switch State", value: "1" },
              { label: "Switch On", value: "2" },
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
              "\n                When the mode of switch On/Off is set to 0, any command of switch off will be disabled and the On/Off function of include button will be disabled. The default setting is enable mode. When manual On/Off function is disabled, the RF command can only switch On but not Off. This is useful function for keeping the device in switch on state.\n            ",
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
              "\n                Show Switch State:When switch is on, LED is on. When switch is off, LED is off. The default setting is Show Switch State. Show Night mode:When switch is on, LED is off. When switch is off, LED is on. One Flash mode:When the state of switch changes, LED will be on only one second, then LED keeps off.\n            ",
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
            size: "2",
            type: "short",
            units: "seconds",
            value: "0",
            Help:
              "Whenever PAN11 switches to on, the auto off timer begin to count down. After the timer decrease to zero, it will switch to off automatically. However if Auto off timer is set as 0, the auto off function will be disabled. The default setting is 0.",
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
              "\n                Whenever a switch off command (BASIC_SET, BINARY_SWITCH_SET, SWITCH_ALL_OFF) is received, it could be interpreted as 4 variety of commands. Switch Off: It switches to OFF state. The default setting is Switch Off. Ignore: The switch off command will be ignored. Switch Toggle: It switches to the inverse of current state. Switch On: It switches to ON state.\n            ",
            Item: [
              { label: "Switch off", value: "0" },
              { label: "Ignore", value: "1" },
              { label: "Switch toggle", value: "2" },
              { label: "Switch on", value: "3" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "1",
            Group: [
              {
                index: "1",
                label: "load vary over 5% or stage has changed",
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
