import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0084:0110:0473",
            name: "OzwInfoPage",
          },
          { text: "images/fortrezz/fmi.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/1690/",
            id: "0110",
            name: "ZWProductPage",
            type: "0473",
          },
          {
            text:
              "The FMI will send the Node information frame when the switch is briefly pressed.  This is primarily used for inclusion; however, status information is also sent after a button press.",
            name: "WakeupDescription",
          },
          { text: "FMI", id: "0110", name: "Identifier", type: "0473" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1690/User Manual FMI - 29Feb2016.pdf",
            name: "ProductManual",
          },
          {
            text:
              "1) Set up the inclusion mode at the controller; 2) Briefly press the switch once and the controller will indicate the unit has been included in the network.  Also, the LED will blink when the inclusion completes.",
            name: "InclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0110",
            name: "FrequencyName",
            type: "0473",
          },
          {
            text:
              "Device Reset to Factory Defaults – Press and hold the button for 15 or more seconds and then release.  This can be done while the device is either in or out of a network, but not while in NWI mode.    CAUTION – When a reset is done in-network, the device will no longer be in the network.  All configurations and associations will be set to default.",
            name: "ResetDescription",
          },
          {
            text:
              "Information is power! With flow meter, you have the power to automate and manage water consumption and leak detection in your home or building.  This is an integral part to a complete water management solution!  Flow meter tracks water usage and reports in gallons.  Track your households water usage!  Drill into reports and find out where your peak consumption is and make changes to reduce your water bills.  Flow meter also tells you if water is flowing or not. It knows if the flow is small (like a toilet running) or large (a garden hose left on). This can be used to detect leaks, faulty appliances, or fixtures left on. To add to it's capabilities, flow meter checks the temperature of the nearby surroundings to make sure the pipes don't freeze by sending you temperature reports.  There's also a backup battery just in case power is interrupted. You wont have to worry about lost data or a lack of leak monitoring. Plumbed on the water main, flow meter is sure to be a valuable part of your home automation & leak prevention system.",
            name: "Description",
          },
          {
            text:
              "1) Set up the exclusion mode at the controller; 2) Briefly press the switch once and then release.  The controller will indicate the unit has been removed from the network.  The LED will blink when the exclusion completes.",
            name: "ExclusionDescription",
          },
          { text: "Flow Meter", name: "Name" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1690/xml",
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
            label: "Temperature Low Threshold",
            max: "246",
            min: "69",
            type: "short",
            units: "",
            value: "0",
            Help: "246 to 69 -10 to 69C",
          },
          {
            genre: "config",
            index: "2",
            label: "Temperature High Threshold",
            max: "247",
            min: "70",
            type: "byte",
            units: "",
            value: "0",
            Help: "247 to 70 -9 to 70C",
          },
          {
            genre: "config",
            index: "3",
            label: "Meter Count",
            max: "2147483647 ",
            min: "0",
            type: "int",
            value: "0",
            Help:
              "\n\t\t\t\t0 TO 2147483647 count rolls over at 99,999,999\n\t\t\t",
          },
          {
            genre: "config",
            index: "4",
            label: "Meter Reporting Interval",
            max: "255",
            min: "0",
            type: "byte",
            value: "0",
            Help: "\n\t\t\t\t0 to 2,550 seconds\n\t\t\t",
          },
          {
            genre: "config",
            index: "5",
            label: "Meter Threshold",
            max: "65535",
            min: "0",
            type: "short",
            value: "0",
            Help: "\n\t\t\t\tLow vs High flow 0 to 65535\n\t\t\t",
          },
          {
            genre: "config",
            index: "6",
            label: "Report selection",
            max: "3",
            min: "0",
            size: "1",
            type: "list",
            value: "3",
            Help: "MultiLevel Sensor Report vs Notification Toggle",
            Item: [
              { label: "Notification Toggle", value: "0" },
              { label: "MultiLevel Sensor Report", value: "1" },
            ],
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "4",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Temperature High", max_associations: "5" },
              { index: "3", label: "Temperature Low", max_associations: "5" },
              { index: "4", label: "Flow has started", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
