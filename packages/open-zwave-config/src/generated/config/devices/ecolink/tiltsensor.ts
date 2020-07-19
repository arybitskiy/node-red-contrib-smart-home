import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 4,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/014A:0003:0001",
            name: "OzwInfoPage",
          },
          { text: "images/ecolink/tiltsensor.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/816/",
            id: "0003",
            name: "ZWProductPage",
            type: "0001",
          },
          { text: "TILTZWAVE1", id: "0003", name: "Identifier", type: "0001" },
          { text: "Ecolink Garage Door Tilt Sensor", name: "Name" },
          {
            text: "U.S. / Canada / Mexico",
            id: "0003",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text:
              "•\tFor indoor use only\n•\tOperating frequency: 908.42 MHz\n•\tOperating range: Up to 100 feet (30.5 meters) line-of-sight\n•\tOperating temperature: 0˚C to 49˚C, 32˚F to 120˚F (ambient temperature)\n•\tBattery type: 3V Lithium CR123A\n•\tBattery life: 5 to 8 years depending upon operating conditions",
            name: "Description",
          },
          {
            text: "https://products.z-wavealliance.org/products/1501/",
            id: "0003",
            name: "ZWProductPage",
            type: "0004",
          },
          {
            text:
              "Once the controller is in exclusion mode, remove the battery pull tab OR insert the battery into the sensor to initiate power up.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Simply remove the sensor cover to wake up for configuration.",
            name: "WakeupDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/1501/Tilt_ZWave_Plus_Manual_R1.04_021816kgs.pdf",
            name: "ProductManual",
          },
          {
            text:
              "Once the controller is in inclusion mode, remove the battery pull tab OR insert the battery to power up the sensor.",
            name: "InclusionDescription",
          },
          {
            text: "U.S. / Canada / Mexico",
            id: "0003",
            name: "FrequencyName",
            type: "0004",
          },
          {
            text: "TILTZWAVE2.5-ECO",
            id: "0003",
            name: "Identifier",
            type: "0004",
          },
          {
            text:
              "To reset the sensor to factory default, place the controller in exclusion mode and then insert the battery into the sensor to initiate power up.  Use this procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/816/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1501/xml",
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
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      {
        id: "112",
        Value: [
          {
            genre: "config",
            index: "991",
            instance: "1",
            label: "Fault restore",
            max: "1",
            min: "0",
            size: "1",
            type: "list",
            value: "1",
            Help:
              "Enable/Disable Basic Sets of 0x00 on a fault restore to nodes in Group 2",
            Item: [
              { label: "Disable", value: "0" },
              { label: "Enable", value: "255" },
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
              { index: "1", label: "Lifeline", max_associations: "5" },
              { index: "2", label: "Basic Report", max_associations: "5" },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
