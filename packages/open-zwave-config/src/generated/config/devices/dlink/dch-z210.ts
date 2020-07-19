import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text:
              "This  plug-in  ON/OFF  switch  DCH-210 (aka Wenzhou TKB TZ88) is a security  enabled  wireless  switch,  based  on Z-Wave  Plus  technology.  Z-Wave  Plus™  enabled  devices  displaying  the  Z-Wave Plus™ logo can also be used with it regardless of the manufacturer, and can also be used in other manufacturer’s Z-Wave™ enabled networks. Remote On/Off control of the  connected  load  is  possible  with  other  manufacturer’s  wireless  Controller.  Each switch is designed to act as a repeater. Repeaters will re-transmit the RF signal to ensure  that  the  signal  is  received  by  its  intended  destination  by  routing  the  signal around obstacles and radio dead spots. Because TZ88 supports Security Command Class, it can learn with Secured controller. Its functionality and supported command classes is identical when included as a secure and non-secure device. \nThis  plug-in  ON/OFF  switch  is  able  to  detect  instance  wattage  (3000W/CE/CN, 1500W/UL/TW/JP)  and  overload  current  (14.5A)  of  connected  lights  or  appliances. When detecting overload state, the Switch will be disabled and its On/Off button will be  lockout  of  which  LED  will  flash  quickly.    However,  unplug  and  re-connect  the switch will reset its overload condition to normal status.",
            name: "Description",
          },
          { text: "Smart Energy Plug In Switch", name: "Name" },
          { text: "DCH-Z210", id: "0011", name: "Identifier", type: "0001" },
          {
            text: "CEPT (Europe) / U.S. / Canada / Mexico",
            id: "0011",
            name: "FrequencyName",
            type: "0001",
          },
          { text: "images/dlink/dch-z210.png", name: "ProductPic" },
          {
            text:
              "Use this procedure only in the event that the primary controller is lost or otherwise inoperable.\n1. Pressing On/Off button three times within 2 seconds will enter inclusion mode. \n2. Within 1 second, press On/Off button again for 5 seconds until LED is off.\n3. IDs are excluded.",
            name: "ResetDescription",
          },
          {
            text:
              "1. Put your Z-Wave controller into inclusion mode by following the instructions provided by the controller manufacturer. \n2.  Pressing On/Off button three times within 2 seconds will enter inclusion mode.",
            name: "InclusionDescription",
          },
          {
            text: "CEPT (Europe)",
            id: "0011",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text:
              "1. Put your Z-Wave controller into exclusion mode by following the instructions provided by the controller manufacturer. \n2.Pressing On/Off button three times within 2 seconds will enter exclusion mode. \n3. Node ID has been excluded.",
            name: "ExclusionDescription",
          },
          { text: "DCH-Z10", id: "0011", name: "Identifier", type: "0001" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text: "Initial version - clone of Wenzhou (TKB) TZ88",
                author: "Jeff Thompson",
                date: "27 April 2020",
                revision: 1,
              },
              {
                text: "Add Product Pic",
                author: "Justin Hammond",
                date: "24 June 2020",
                revision: 2,
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
            label: "Watt meter report period",
            max: "32767",
            min: "1",
            type: "byte",
            units: "5 sec",
            value: "1",
            Help:
              "If the setting is configured for 1 hour (value=720), the plug will report its instant power consumption every 1 hour.",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "kWh meter report period",
            max: "32767",
            min: "1",
            type: "byte",
            units: "10 min",
            value: "6",
            Help:
              "If the setting is configured for 1 hour (value=6), the plug will report its accumulated power consumption (kWh) every 1 hour.",
          },
        ],
      },
    ],
  },
};

export default config;
