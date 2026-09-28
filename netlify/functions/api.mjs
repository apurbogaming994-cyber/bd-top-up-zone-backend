export default async (req) => {
  // GET: Backend চালু আছে কিনা পরীক্ষা
  if (req.method === "GET") {
    return new Response(
      JSON.stringify({
        success: true,
        message: "BD TOP UP ZONE Backend চলছে"
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json"
        }
      }
    );
  }

  // POST: অর্ডার গ্রহণ
  if (req.method === "POST") {
    try {
      const data = await req.json();

      const { uid, product, price, bank, trx } = data;

      if (!uid || !product || !price || !bank || !trx) {
        return new Response(
          JSON.stringify({
            success: false,
            message: "সব তথ্য পূরণ করুন"
          }),
          {
            status: 400,
            headers: {
              "Content-Type": "application/json"
            }
          }
        );
      }

      return new Response(
        JSON.stringify({
          success: true,
          status: "Pending",
          message: "অর্ডার গ্রহণ করা হয়েছে",
          order: {
            uid,
            product,
            price,
            bank,
            trx
          }
        }),
        {
          status: 200,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({
          success: false,
          message: "Invalid request"
        }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
    }
  }

  return new Response(
    JSON.stringify({
      success: false,
      message: "Method not allowed"
    }),
    {
      status: 405,
      headers: {
        "Content-Type": "application/json"
      }
    }
  );
};
