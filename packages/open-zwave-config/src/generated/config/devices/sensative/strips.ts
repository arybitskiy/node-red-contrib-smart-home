import type { document } from "../../../github.com/OpenZWave/device_configuration";

const config: Partial<document> = {
  Product: {
    Revision: 15,
    MetaData: [
      {
        MetaDataItem: [
          {
            text: "http://www.openzwave.com/device-database/019A:0003:0003",
            name: "OzwInfoPage",
          },
          { text: "images/sensative/strips.png", name: "ProductPic" },
          {
            text: "https://products.z-wavealliance.org/products/3388/",
            id: "0003",
            name: "ZWProductPage",
            type: "0003",
          },
          {
            text:
              "Please use this procedure only when your Z-Wave controller is missing or otherwise inoperable:\n\n1. Place the round magnet at the rounded edge of Strips. \n\n2. When the LED blinks, move the magnet away. Repeat 3 times in total within 10 seconds.\n\n3. On the 3rd repetition, leave the magnet at the rounded edge for 10s. \n\n4. A long LED signal indicates success.",
            name: "ResetDescription",
          },
          {
            text:
              "Wake up Strips manually for Z-Wave communication:\n\n1. Place the round magnet at the rounded edge of Strips. \n\n2. When the LED blinks, move the magnet away. \n\n3. Repeat 3 times in total within 10 seconds.",
            name: "WakeupDescription",
          },
          {
            text:
              'Strips is delivered in "auto-add" mode. \nFollow the process below to add Strips in a Z-Wave network.\n\n1. Start the add mode on the Z-Wave controller. \nSee the controller’s manual.\n\n2. Remove both magnets from Strips. Strips blinks twice to confirm the command and successful addition. \n\n3. A long LED blink indicates that the add process was successful\n\n4. The Z-Wave controller application should now allow you to monitor your Strips sensor status.\n\n5. Move the squared magnet as shown in the picture . Check that the Z-Wave system indicates the status correctly.\n\n6. If the Z-Wave system does not respond, it may be needed to change Strips’ notification type.\n\nManual add:\n1. Set the controller to add mode  (See your controller’s manual).  \n\n2. Place the round magnet at the rounded edge of Strips. \nWhen the LED blinks, move the magnet away. Repeat 3 times in total within 10 seconds. \n\n3. A long LED blink indicates that the add process was successful.',
            name: "InclusionDescription",
          },
          { text: "11 01 015", id: "0003", name: "Identifier", type: "0003" },
          {
            text:
              "1. Set the controller in remove mode  (See your controller’s manual).  \n\n2. Place the round magnet at the rounded edge of Strips. \nWhen the LED blinks, move the magnet away. Repeat 3 times in total within 10 seconds. \n\n3. A long LED blink indicates that the remove process was successful.",
            name: "ExclusionDescription",
          },
          {
            text:
              "Strips Guard is an ultra-thin magnetic sensor designed to monitor windows and doors for your safety. It´s so thin that it can be mounted invisibly in the tiny gap between the frame and the door or window. \nIt is as easy to mount as a sticker using Strips's  adhesive tape.\nStrips Guard is Z-Wave plus compliant and can be used with any existing Z-Wave smarthome systems.",
            name: "Description",
          },
          { text: "Strips-MaZw", name: "Name" },
          {
            text:
              "https://Products.Z-WaveAlliance.org/ProductManual/File?folder=&filename=Manuals/3388/Strips Guard EU R3.pdf",
            name: "ProductManual",
          },
          {
            text:
              "CEPT (Europe) / U.S. / Canada / Mexico / CEPT (Europe) / U.S. / Canada / Mexico / CEPT (Europe) / U.S. / Canada / Mexico / U.S. / Canada / Mexico / CEPT (Europe) / CEPT (Europe) / CEPT (Europe) / U.S. / Canada / Mexico / Australia / New Zealand / India",
            id: "0003",
            name: "FrequencyName",
            type: "0003",
          },
        ],
        ChangeLog: [
          {
            Entry: [
              {
                text:
                  "Initial Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1510/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "23 May 2019",
                revision: 2,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1753/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 3,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1790/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 4,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1862/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 5,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/1863/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "24 May 2019",
                revision: 6,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2073/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 7,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2080/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 8,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2144/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 9,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2146/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 10,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/2827/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "02 Jun 2019",
                revision: 11,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3296/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 12,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3297/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 13,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3369/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 14,
              },
              {
                text:
                  "Updated Metadata Import from Z-Wave Alliance Database - https://products.z-wavealliance.org/products/3388/xml",
                author: "Justin Hammond - Justin@dynam.ac",
                date: "03 Jun 2019",
                revision: 15,
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
            label: "Notification type",
            size: "1",
            type: "list",
            value: "1",
            Help: "Set Notification type.",
            Item: [
              { label: "Binary Sensor report", value: "0" },
              { label: "Notification report", value: "1" },
              { label: "Basic report", value: "2" },
            ],
          },
          {
            genre: "config",
            index: "2",
            label: "Led indication",
            size: "1",
            type: "list",
            value: "1",
            Help: "Set Led indication.",
            Item: [
              { label: "Off", value: "0" },
              { label: "On", value: "1" },
            ],
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
