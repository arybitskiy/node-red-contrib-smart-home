import type { document } from "../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 2,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/0154:0001:0005",
            name: "OzwInfoPage",
          },
          { text: "images/popp/012501.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/2147/",
            id: "0001",
            name: "ZWProductPage",
            type: "0005",
          },
          { text: "Strike Lock Control", name: "Name" },
          {
            text:
              "To do a factory reset press the Z-Wave button on the bottom of the device for at least 10 seconds.  This procedure should only be used when the primary controller is missing or inoperable.",
            name: "ResetDescription",
          },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/2147/POP_StrikeManual.pdf",
            name: "ProductManual",
          },
          {
            text:
              "An electric strike is an access control device used to lock and release doors. Electric strikes are installed in or on the doorframe and work in conjunction with mechanical door lock, on the principle of electronically controlling the rotation of the keeper allowing for door opening without manual retraction of the mechanical door lock. This product combines a 16 mm thick strike lock (that will fit into almost all door formats) with a Z-Wave plus empowered wireless control. The lock mechanics and the Z-Wave control are operated by a 9V block battery or an external 8-12V AC / 8-24V DC transformer. The Z-Wave control accepts commands to open or close the strike. Depending on a configuration parameter the door will be looked automatically after a certain time even if no ‘close’ command was sent. The device can be used standalone and within every conventional Intercom system controlling strike locks.",
            name: "Description",
          },
          {
            text: "CEPT (Europe)",
            id: "0001",
            name: "FrequencyName",
            type: "0005",
          },
          { text: "012501", id: "0001", name: "Identifier", type: "0005" },
          {
            text:
              "Pressing the Z-Wave button for one second includes the device. It is not allowed to operate the device in a non-secure environment. This means that the including controller must support Secure Command Class.",
            name: "InclusionDescription",
          },
          {
            text: "A single click on the button will exclude the device.",
            name: "ExclusionDescription",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2147/xml",
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
            index: "0",
            instance: "1",
            label: "Automatically switch off after",
            max: "127",
            min: "0",
            size: "1",
            type: "byte",
            units: "seconds",
            value: "3",
            Help:
              "\n\t\t\t0: No automated close after command open.\n\t\t\t1 - 127: Close again after x seconds (Default 3)\n\t\t\t",
          },
          {
            genre: "config",
            index: "1",
            instance: "1",
            label: "Value of Off-Command",
            max: "99",
            min: "0",
            size: "1",
            type: "byte",
            value: "0",
            Help: "0 - 99 (Default 0)",
          },
          {
            genre: "config",
            index: "2",
            instance: "1",
            label: "Value of On-Command",
            max: "99",
            min: "0",
            size: "1",
            type: "byte",
            value: "99",
            Help: "0 - 99 (Default 99)",
          },
        ],
      },
      {
        id: "133",
        Associations: [
          {
            num_groups: "2",
            Group: [
              { index: "1", label: "Lifeline", max_associations: "10" },
              {
                index: "2",
                label: "Action on External Dry Input",
                max_associations: "10",
              },
            ],
          },
        ],
      },
    ],
  },
};

export default config;
