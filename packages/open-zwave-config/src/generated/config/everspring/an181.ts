import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0060:0006:0004",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/an181.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1067/",
            id: "0006",
            name: "ZWProductPage",
            type: "0004",
          },
          {
            text:
              "(This procedure should only be used when the network primary controller is inoperable.)\n1. Press the link key three times within 1.5 seconds to put the unit into exclusion mode.\n2. Within 1 second of step 1, press link key again and hold it until LED is off (about 5 seconds). (Please refer to the documentation for the location of the link key.)\n3. Node ID is excluded.  The device reverts to factory default state and will be in auto-inclusion mode for 4 minutes..",
            name: "ResetDescription",
          },
          { text: "Metering Mini Plug", name: "Name" },
          { text: "NR", name: "WakeupDescription" },
          {
            text:
              "1. Put the Z-Wave Controller into inclusion mode.\n2. Press the link key three times within 1.5 seconds to put the unit into inclusion mode. (Please refer to the documentation for the location of the link key.)",
            name: "InclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1067/manual_AN181_20140729.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1. Put the Z-Wave Controller into exclusion mode.\n2. Press the link key three times within 1.5 seconds to put the unit into exclusion mode. (Please refer to the documentation for the location of the link key.)",
            name: "ExclusionDescription",
          },
          { text: "AN181-6", id: "0006", name: "Identifier", type: "0004" },
          {
            text: "CEPT (Europe)",
            id: "0006",
            name: "FrequencyName",
            type: "0004",
          },
          {
            text:
              "The Metering Plug is a Z-Wave enabled device which is fully compatible with any Z-Wave enabled network.  Z-Wave enabled devices displaying the Z-Wave logo can also be used with it regardless of the manufacturer, and ours can also be used in other manufacturer’s Z-Wave enabled networks.  Inclusion of this unit on other manufacturer’s Wireless Controller menu allows remote operation of the unit and the connected load.\n\nThe Metering Plug is designed to control the on/off status of lighting and appliances load in your house.  For metering the unit can detect up to 10485.75kW/h before resetting to 0 and can support wattage, voltage, ampere, and PF detection. The unit can also detect overload upon which the unit will switch off relay and keep LED flashing until power is off and re-applied.  At 220-240V voltage, this Plug can support up to 2500W resistive, 1200W incandescent, 700W motor, or 320W (40W*8) fluorescent load.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1067/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
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
            label: "Basic Set Command",
            max: "255",
            min: "0",
            size: "2",
            type: "short",
            units: "",
            value: "255",
            Help:
              '\n\tSet Basic Set Command value to be sent to group 2 when switch is turned on.\n\n\tWhen the physical button on the mini-plug is used to turn OFF the switch the value "0" will always be sent to group 2,\n\thowever this is not the case when the switch is turned off remotely.\n\t    ',
          },
          {
            genre: "config",
            index: "2",
            label: "Delay",
            max: "25",
            min: "3",
            size: "1",
            type: "byte",
            units: "seconds",
            value: "3",
            Help:
              "\n                The delaying time to report to Group 1\n            ",
          },
          {
            genre: "config",
            index: "3",
            label: "Remember Last",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            units: "",
            value: "1",
            Help:
              "\n                Remember the last status on plug\n            ",
            Item: [
              { label: "Do not remember", value: "0" },
              { label: "Remember", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "4",
            label: "Wattage Auto Report",
            max: "32767",
            min: "0",
            size: "2",
            type: "short",
            units: "minutes",
            value: "1",
            Help: "Set the interval for wattage auto report (0 = disabled)",
          },
          {
            genre: "config",
            index: "5",
            label: "Energy Auto report",
            max: "32767",
            min: "0",
            size: "2",
            type: "short",
            units: "minutes",
            value: "60",
            Help: "Set the interval for kWh auto report (0 = disabled)",
          },
          {
            genre: "config",
            index: "6",
            label: "Value of Wattage surpassed",
            max: "2500",
            min: "0",
            size: "2",
            type: "short",
            units: "watts",
            value: "0",
            Help:
              "Auto report is sent when load surpasses the set value of wattage (0 = disabled)",
          },
          {
            genre: "config",
            index: "7",
            label: "Change of Wattage surpassed",
            max: "100",
            min: "0",
            size: "1",
            type: "byte",
            units: "%",
            value: "0",
            Help:
              "Auto report is sent when the change of wattage surpasses the set percentage (0 = disabled)",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              {
                index: "2",
                label: "On/Off control (Button on the mini-plug)",
                max_associations: "4",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
