import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 5,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/013C:001A:0006",
            name: "OzwInfoPage",
          },
          { text: "images/zipato/phpab01.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2420/",
            id: "001A",
            name: "ZWProductPage",
            type: "0006",
          },
          {
            text:
              "This product can be operated in any Z-Wave network with other Z-Wave  certified  devices  from  other  manufacturers.  All  non-battery operated nodes within the network will act as repeaters regardless  of  vendor  to  increase  reliability  of  the  network. Zipato  Energy  Meter  monitors  total  electricity  consumption of connected appliances and reports it to Zipato or any other Z-Wave enabled controller in real time. Small and compact size allows  easy  installation  in  majority  of  electricity  distribution boxes. It supports two loads upto 6000W each (@ 120V).",
            name: "Description",
          },
          { text: "ph-pab01", id: "001A", name: "Identifier", type: "0006" },
          {
            text:
              "Put your Z-Wave controller into inclusion mode by following the instructions provided by the controller manufacturer.\nPressing On/Off (Include) button three times within 2 seconds will enter inclusion mode.",
            name: "InclusionDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2420/ph-pab01 - MM Energy Meter User Manual v1.1 - Print.pdf",
            name: "ProductManual",
          },
          {
            text: "CEPT (Europe)",
            id: "001A",
            name: "FrequencyName",
            type: "0006",
          },
          { text: "Micromodule Energy Meter, Z-Wave", name: "Name" },
          {
            text:
              "Use this procedure only in the event that the network primary controller is missing or otherwise inoperable.\nPressing On/Off (Include) button three times within 2 seconds will enter inclusion mode.\nWithin 1 second, press and hold On/Off (Include) button again for 5 seconds until LED is off.\nIDs are excluded.",
            name: "ResetDescription",
          },
          {
            text:
              "Put your Z-Wave controller into exclusion mode by following the instructions provided by the controller manufacturer.\nPressing On/Off (Include) button three times within 2 seconds will enter exclusion mode.\nNode ID has been excluded.",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1599/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2420/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 5,
              },
            ],
          },
        ],
      },
    ],
    CommandClass: [
      { action: "remove", id: "32" },
      { id: "96", Compatibility: [{ MapRootToEndpoint: [true] }] },
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
            type: "short",
            units: "5 sec",
            value: "720",
            Help: "",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "kWh meter report period",
            max: "32767",
            min: "1",
            type: "short",
            units: "5 sec",
            value: "720",
            Help: "",
          },
          {
            genre: "config",
            index: "3",
            instance: "1",
            label: "Selected End Point",
            max: "3",
            min: "1",
            size: "1",
            type: "list",
            value: "1",
            Help: "",
            Item: [
              { label: "CT1 and CT2", value: "1" },
              { label: "CT1", value: "2" },
              { label: "CT2", value: "3" },
            ],
          },
          {
            genre: "config",
            index: "4",
            instance: "1",
            label: "Threshold of Current for Load Caution",
            max: "750",
            min: "10",
            type: "short",
            units: "0.01 Amp",
            value: "750",
            Help: "",
          },
          {
            genre: "config",
            index: "5",
            instance: "1",
            label: "Threshold of KWH for Load Caution",
            max: "10000",
            min: "1",
            type: "short",
            units: "KWh",
            value: "10000",
            Help: "",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "3",
            Group: [
              {
                index: "1",
                label: "Report CT1 and CT2",
                max_associations: "1",
              },
              {
                auto: "true",
                index: "2",
                label: "Report CT1",
                max_associations: "5",
              },
              {
                auto: "true",
                index: "3",
                label: "Report CT2",
                max_associations: "5",
              },
            ],
          },
        ],
      },
      { id: "142", Compatibility: [{ ForceInstances: [true] }] },
    ],
  },
};

export default config;
