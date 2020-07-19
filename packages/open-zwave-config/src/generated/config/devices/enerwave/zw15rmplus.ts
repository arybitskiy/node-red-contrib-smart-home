import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 3,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/011A:0105:0111",
            name: "OzwInfoPage",
          },
          { text: "images/enerwave/zw15rmplus.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1776/",
            id: "0105",
            name: "ZWProductPage",
            type: "0111",
          },
          {
            text:
              "The ZW15RM TR Duplex Receptacle is a perfect wireless manual and remote on/off control replacement of regular receptacles, controlling table and floor lamps, small appliances, etc. It provides two different type outlets. One outlet with Z-Wave mark has programmable functions such as scenes, association, schedule event, etc. It is fully interoperable with other Z-Wave certified device from other manufacturers and/or other applications. It can report wattage energy usage or kWh energy usage to a Z-Wave gateway.It has a Blue LED on the face cover indicates the status of the controlled outlet and/or act as a night light. The other outlet with Tamper-Resistant feature provides constant power, helps you and your families prevent electrical injuries.",
            name: "Description",
          },
          {
            text:
              "When the controller is in add mode and the blue LED is blinking on the\nZW15RM, press and hold the program button of ZW15RM for 3 second, and\nthen the controller will verify the add.",
            name: "InclusionDescription",
          },
          { text: "IN-Wall Smart Meter TR Duplex Receptacle", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0105",
            name: "FrequencyName",
            type: "0111",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1776/ZW15RM(20160509 ).pdf",
            name: "ProductManual",
          },
          {
            text:
              "When the controller is in remove mode, press and hold the program button of\nZW15RM for 3 second, and then the controller will remove it from the current\nZ-Wave network, and the LED will blink on the receptacle,when power on.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Once program button is pressed and hold for 10 second, the device will send a device reset locally notification to controller. Then clear all of information for\nthe network, and restore factory defaults, and reset the module. Use this  procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          { text: "ZW15RM", id: "0105", name: "Identifier", type: "0111" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1776/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 3,
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
            label: "LED mode",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "0",
            Help: "Synchronization of load power and LED indicator",
            Item: [
              { label: "Power on, LED off", value: "0" },
              { label: "Power on, LED on", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "8",
            label: "Instant Energy Autosend Interval",
            max: "255",
            min: "0",
            type: "byte",
            units: "minutes",
            value: "0",
            Help:
              "How often to send the energy report for the moment-in-time usage (METER_REPORT version) automatically in minutes. 0 = disabled.",
          },
          {
            genre: "config",
            index: "9",
            label: "Instant Multilevel Autosend Interval",
            max: "255",
            min: "0",
            type: "byte",
            units: "minutes",
            value: "0",
            Help:
              "How often to send the energy report for the moment-in-time usage (SENSOR_MULTILEVEL_REPORT version) automatically in minutes. 0 = disabled.",
          },
          {
            genre: "config",
            index: "10",
            label: "Accumulated Energy Autosend Interval",
            max: "255",
            min: "0",
            type: "byte",
            units: "minutes",
            value: "0",
            Help:
              "How often to send the energy report for the accumulated energy usage usage (METER_REPORT) automatically in minutes. 0 = disabled.",
          },
          {
            genre: "config",
            index: "11",
            label: "Wattage Change Notifications",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Enable automatic notifications when there is a change in wattage.",
            Item: [
              { label: "No report", value: "0" },
              { label: "Send METER_REPORT only (default)", value: "1" },
              { label: "Send SENSOR_MULTILEVEL_REPORT only", value: "2" },
              { label: "Send both reports (recommended)", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "12",
            label: "Wattage Change Threshold",
            max: "255",
            min: "0",
            type: "byte",
            units: "0.1 watt",
            value: "10",
            Help:
              "How much the wattage needs to change by to trigger the wattage change notifications. Units are 1-10th of a watt; 0-255: 0.0-25.5W",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "1" },
              {
                index: "2",
                label: "StatusReport: Send basic report",
                max_associations: "5",
              },
              {
                index: "3",
                label: "PowerReport: Send meter power report",
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
