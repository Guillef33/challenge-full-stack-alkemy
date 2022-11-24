    getById: catchAsync(async (req, res, next) => {
        const { id } = req.params;
        try {
            const user = await User.findByPk(id);.
             if (!user) {
                const httpError = createHttpError(404, 'User does not exist');
                return next(httpError);
            }
            endpointResponse({
                res,
                message: 'Users retrieved successfully',
                body: response,
            });
            }   catch (error) {
            const httpError = createHttpError(
              error.statusCode,
              `['Error retrieving user] - [index - GET]: ${error.message}`
            );
            return next(httpError);
        }   
      }),