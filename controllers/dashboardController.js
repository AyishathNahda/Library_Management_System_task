const prisma = require("../prismaClient");

const getPendingReturns = async (req, res) => {
  try {
    const today = new Date();

    const issuances = await prisma.issuance.findMany({
      include: {
        member: true,
        book: true
      }
    });

    const result = issuances
      .filter((i) => i.issuance_status !== "RETURNED")
      .map((i) => {
        let status = "UPCOMING";

        if (new Date(i.target_return_date) < today) {
          status = "OVERDUE";
        } else if (
          new Date(i.target_return_date).toDateString() === today.toDateString()
        ) {
          status = "DUE TODAY";
        }

        return {
          memberName: i.member.mem_name,
          bookName: i.book.book_name,
          issuedDate: i.issuance_date,
          targetReturnDate: i.target_return_date,
          status
        };
      });

    res.json(result);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

module.exports = { getPendingReturns };