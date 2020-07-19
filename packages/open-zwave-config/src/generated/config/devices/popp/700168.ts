import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0154:0011:0004",
            name: "OzwInfoPage",
          },
          { text: "images/popp/700168.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2418/",
            id: "0011",
            name: "ZWProductPage",
            type: "0004",
          },
          {
            text:
              "Push the button inside the device for at least 10 seconds.\nUse this procedure only in the event that the network primary controller is missing or otherwise inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "Push the Z-Wave button one time. You find the Z-Wave button by removing the electronics module from the base.",
            name: "WakeupDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2418/POPE700168_Manual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "This device measures the rain level on a certain position. The device is IP55 rated and can be used outside the home in the garden or on any other place exposed to rain. The device has a funnel on the top-side that will collect the rain on a certain diameter. The internal mechanics and electronics counts the rain level and will report it every about 4 minutes if and only if there is rain.  The device also monitors a heavy rain condition (10 l/sqm within 5 minutes) and will send out alarm messages when detected.",
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "0011",
            name: "FrequencyName",
            type: "0004",
          },
          { text: "Z-Wave Rain Sensor", name: "Name" },
          {
            text:
              "Push the Z-Wave button one time. You find the Z-Wave button by removing the electronics module from the base.",
            name: "InclusionDescription",
          },
          { text: "700168", id: "0011", name: "Identifier", type: "0004" },
          {
            text:
              "Push the Z-Wave button one time. You find the Z-Wave button by removing the electronics module from the base.",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2418/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
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
            label: "Rain Counter",
            max: "32000",
            min: "0",
            size: "2",
            type: "short",
            units: "mm",
            value: "0",
            Help:
              "\n\t\t\t\tThs values shows the total count of rain from the moment of inclusion in mm water level. By writing this value this counter can be reset.\n\t\t\t\tDefault Value: 0\n\t\t\t",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Rain Start Command",
            max: "99",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "99",
            Help:
              "\n\t\t\t\tThis BASIC Set Command value is sent out into Association Group 2 when the device detects start of rain.\n\t\t\t\tDefault Value: 99\n\t\t\t",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Rain Stop Command",
            max: "99",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n\t\t\t\tThis BASIC Set Command value is sent out into Association Group 2 when the device detects stop of rain.\n\t\t\t\tDefault Value: 0\n\t\t\t",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Meter Multiplier",
            size: "2",
            type: "list",
            units: "",
            value: "1",
            Help:
              "\n\t\t\t\tThis multiplier allows to adapt the display to certain controllers not being able to handle very low numbers.\n\t\t\t\tDefault Value: 1\n\t\t\t",
            Item: [
              { label: "Multiply by 1", value: "1" },
              { label: "Multiply by 10", value: "10" },
              { label: "Multiply by 100", value: "100" },
              { label: "Multiply by 1000", value: "1000" },
            ],
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Heavy Rain",
            max: "255",
            min: "0",
            size: "1",
            type: "byte",
            units: "mm",
            value: "255",
            Help:
              "\n\t\t\t\tThis threshold defines when a heavy rain condition is hit. In most countries this is defined as > 15 mm rain per hour.\n\t\t\t\tThe default value however is to turn this function off.\n\t\t\t\tDefault Value: 255\n\t\t\t",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Heavy Rain Start Command",
            max: "99",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "99",
            Help:
              "\n\t\t\t\tThis BASIC Set Command value is sent out into Association Group 3 when the device detects start of heavy rain.\n\t\t\t\tDefault Value: 99\n\t\t\t",
          },
          {
            genre: "config",
            index: "7",
            instance: "1",
            label: "Heavy Rain Stop Command",
            max: "99",
            min: "0",
            size: "1",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n\t\t\t\tThis BASIC Set Command value is sent out into Association Group 3 when the device detects stop of heavy rain.\n\t\t\t\tDefault Value: 0\n\t\t\t",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "5" },
              {
                index: "2",
                label: "Switching Command when Rain",
                max_associations: "5",
              },
              {
                index: "3",
                label: "Heavy Rain detected",
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
