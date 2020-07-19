import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0060:0001:0002",
            name: "OzwInfoPage",
          },
          { text: "images/everspring/sm103.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/924/",
            id: "0001",
            name: "ZWProductPage",
            type: "0002",
          },
          { text: "SM103", id: "0001", name: "Identifier", type: "0002" },
          { text: "Door/Window Sensor", name: "Name" },
          { text: "http://www.everspring.com/SM103.aspx", name: "ProductPage" },
          {
            text: "CEPT (Europe) / Russia / CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0002",
          },
          {
            text:
              "The Mini Door/Window contact detector consists of two parts; a Detector and a Magnet.  They are designed to be fitted to doors or windows with the Magnet mounted on the opening part and the Detector mounted on the fixed frame. Opening the protected door/window will remove the magnetic field, trigger the Detector and generate an alarm condition, (if the system is armed).\nThe Door/Window Detector is a Z-Wave enabled device and is fully compatible with any Z-Wave enabled network.\nIf several windows need to be protected, adopt the wire according to the placement as mentioned below. This should be wired to the terminal block provided in the battery compartment in series connection.",
            name: "Description",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/394/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/921/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/924/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
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
            label: "On Level",
            max: "127",
            min: "0",
            type: "byte",
            units: "",
            value: "99",
            Help:
              "\n\t\t\t\tDefines the level in the event sent when the sensor is triggered.  Default is 99 (full brightness for a Z-Wave dimmer). 100-127 will set device on to the last value it was when turned off.\n\t\t\t",
          },
          {
            genre: "config",
            index: "2",
            label: "Off Time",
            max: "127",
            min: "0",
            type: "byte",
            units: "seconds",
            value: "1",
            Help:
              "\n\t\t\t\tOn Time sets the number of seconds the sensor stays alerted before the off event is sent.\n\t\t\t",
          },
          {
            genre: "config",
            index: "3",
            label: "Power Saving",
            max: "127",
            min: "0",
            type: "byte",
            units: "",
            value: "0",
            Help:
              "\n\t\t\t  \tEnable/Disable power saving mode. 0 enables.\n\t\t\t",
          },
        ],
      },
      { id: "32", Compatibility: [{ SetAsReport: [true] }] },
      { action: "add", id: "113", Compatibility: [{ GetSupported: [false] }] },
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
