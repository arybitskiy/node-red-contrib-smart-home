import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 7,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/013C:0006:0001",
            name: "OzwInfoPage",
          },
          { text: "images/philio/pan08.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/891/",
            id: "0006",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text: "CEPT (Europe) / U.S. / Canada / Mexico",
            id: "0006",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text: "http://www.philio-tech.com/p_switch.htm",
            name: "ProductPage",
          },
          {
            text:
              "The in-wall Roller Shutter Controller is designed to switch rise/lower roller shutter connected to its terminals using radio waves, controllers and a push button directly connected to this Roller Controller. \nThis in-wall Roller Shutter Controller is a transceiver which is a Z-Wave Plus™ enabled device and is fully compatible with any Z-Wave™ enabled network. Slim design let the Controller can easily hide itself into the wall box and that will be good for the house decoration.   \nThe new smart relay calibration technology can reduce the inrush current caused by the load and let the module work perfectly with many kind of Roller Shutter.     \nThis in-wall Roller Shutter Controller is able to detect position of the Shutter by using the patterned power measuring method, so it can be remote controlled not only fully up or down, but also can be adjusted to ex. 30% or 50%.  And  when  manual controlled by push button, the controller also can memorize the position and send the new shutter position to its controller (ex. IP-Gateway).",
            name: "Description",
          },
          { text: "Roller shutter controller", name: "Name" },
          { text: "PAN08-2", id: "0006", name: "Identifier", type: "0001" },
          {
            text: "https://products.z-wavealliance.org/products/2914/",
            id: "0015",
            name: "ZWProductPage",
            type: "0001",
          },
          {
            text:
              "Use this procedure only in the event that the primary controller is lost or otherwise inoperable. \n1. Pressing Include button three times within 2 seconds will enter inclusion mode.\n2.  Within 1 second, press Include button again for 5 seconds.",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2914/PAN08 manual-20180423.pdf",
            name: "ProductManual",
          },
          {
            text: "CEPT (Europe) / Brazil / Japan",
            id: "0015",
            name: "FrequencyName",
            type: "0001",
          },
          {
            text:
              "1.  Put your Z-Wave controller into inclusion mode by following the instructions provided by the controller manufacturer. \n2.  Pressing Include button three times within 2 seconds will enter inclusion mode.",
            name: "InclusionDescription",
          },
          {
            text:
              "1.  Put your Z-Wave controller into exclusion mode by following the instructions provided by the controller manufacturer. \n2.  Pressing Include button three times within 2 seconds will enter exclusion mode.",
            name: "ExclusionDescription",
          },
          { text: "PAN08-3", id: "0015", name: "Identifier", type: "0001" },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/880/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/891/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1164/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "08 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2580/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2914/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 7,
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
            type: "short",
            value: "720",
            Help: "Watt Meter Report Period. Unit: 5 seconds.",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "kWh meter report period",
            max: "32767",
            min: "1",
            type: "short",
            value: "6",
            Help: "kWH Meter Report Period. Unit: 10 minutes.",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Threshold of Watt for Load Caution",
            max: "1100",
            min: "10",
            type: "short",
            value: "1100",
            Help: "Threshold of Watt for Load Caution. Unit: 1 watt",
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Threshold of kWh for Load Caution",
            max: "10000",
            min: "1",
            type: "short",
            value: "10000",
            Help: "Threshold of kWH for Load Caution. Unit: 1 kWH",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "External switch type",
            max: "2",
            min: "1",
            type: "byte",
            value: "1",
            Help:
              "External switch type: 1-> One Push button, 2->Two Push button",
          },
          {
            genre: "config",
            index: "6",
            instance: "1",
            label: "Level report mode",
            max: "2",
            min: "1",
            type: "byte",
            value: "1",
            Help:
              "Level report mode: 1-> Report destination level in 5s, 2-> Report 10 percent level while running",
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
