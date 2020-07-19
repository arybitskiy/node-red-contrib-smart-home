import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/011A:0101:0111",
            name: "OzwInfoPage",
          },
          { text: "images/enerwave/zw20rm.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1766/",
            id: "0101",
            name: "ZWProductPage",
            type: "0111",
          },
          { text: "PLUG-IN SMART METER APPLIANCE MODULE", name: "Name" },
          { text: "ZWN-333M", id: "0101", name: "Identifier", type: "0111" },
          {
            text:
              "This ZWN-333M Smart Meter Appliance Module is a Z-Wave enabled device and fully interoperable with other Z-Wave certified device from other manufacturers and/or other applications, which can report wattage energy usage or kWh energy usage to a Z-Wave gateway. In a Z-Wave network, ZWN-333M can be controlled to turn on/off to save energy, also act as a wireless repeater regardless of vendor to increase reliability of the network. With a horizontal design, the Smart Meter Appliance Module will not block other nearby AC outlets.",
            name: "Description",
          },
          {
            text:
              "Once program button is pressed and hold for 3 second, the device will enter into\nlearn mode to accomplish adding or removing by controller. Refer to the instruction\nfor your primary controller to access the setup function and add or remove devices.",
            name: "ExclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1766/ZWN-333M_20160506.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Once program button is pressed and hold for 3 second, the device will enter into\nlearn mode to accomplish adding or removing by controller. Refer to the instruction\nfor your primary controller to access the setup function and add or remove devices.",
            name: "InclusionDescription",
          },
          {
            text:
              "Once program button is pressed and hold for 10 second, the device will send a device reset locally notification to controller. Then clear all of information for the network, and restore factory defaults, and reset the module. Use this procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0101",
            name: "FrequencyName",
            type: "0111",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1766/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
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
            label: "LED mode",
            size: "1",
            type: "list",
            value: "0",
            Help: "Synchronization of outlet power and LED indicator",
            Item: [
              { label: "Power on, LED off", value: "0" },
              { label: "Power on, LED on", value: "1" },
            ],
          },
          {
            genre: "config",
            index: "8",
            label: "Instant Meter Autosend Interval",
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
            num_groups: "1",
            Group: [{ index: "1", label: "Reports", max_associations: "5" }],
          },
        ],
      },
    ],
  },
};

export default config;
