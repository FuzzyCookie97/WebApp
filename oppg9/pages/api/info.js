
const info = [
    {
      names: 'First Names',
      firstNames: [
        {
          firstName: 'John',
        },
        {
          firstName: 'Nessie',
        },
        {
          firstName: 'Taro',
        },
      ],
    },
  ]

  //-----------------Just for testing the receiver-----------------------------

  // export default function handler(req, res) {
  //   if (req.method === 'POST') {

  //     const data = req.body
  
  //     info.push(data)
  
  //     res.status(201).json({ success: true, data: info })
  //   } else if (req.method === 'PUT') {
  
  //       res.status(405).end()
  //   } else {
  
  //     res.status(200).json({ success:true, data: info })
  //   }
  // }

  export default function handler(req, res) {
    if (req.method === 'POST') {

      const data = req.body
  
      if (!data?.firstName) {

        res
          .status(400)
          .json({ success: false, error: 'Did not fill out the input' })
      } else {

        info.push(data)
  
        res.status(201).json({ success: true, data: info })
      }
    } else if (req.method === 'PUT') {

      res.status(405).end()

    } else {

      res.status(200).json({ success: true, data: info })
    }
  }