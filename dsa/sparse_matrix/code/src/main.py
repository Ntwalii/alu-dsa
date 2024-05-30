#! /usr/bin/python3

import os

from sparse_matrix import SparseMatrix


def main():

    input_base_path = 'dsa/sparse_matrix/sample_inputs/'
    firstmatrix_file_path = os.path.join(input_base_path, 'matrix1.txt')
    secondmatrix_file_path = os.path.join(input_base_path, 'matrix2.txt')
    matrix1 = SparseMatrix( firstmatrix_file_path)
    matrix2 = SparseMatrix(secondmatrix_file_path)
    result_add = matrix1.add(matrix2)
    result_sub = matrix1.subtract(matrix2)
    result_mult = matrix1.multiply(matrix2)
    output_base_path = 'dsa/sparse_matrix/sample_outputs/'
    output_add_path = os.path.join(output_base_path, 'addition_result.txt')
    output_sub_path = os.path.join(output_base_path, 'subtraction_result.txt')
    output_mult_path = os.path.join(output_base_path, 'multiplication_result.txt')
    result_add.save_result(output_add_path)
    result_sub.save_result(output_sub_path)
    result_mult.save_result(output_mult_path)
    print()
    print()
    print(f"Substraction result:{result_sub}")
    print(f"Addition result:{result_add}")
    print()
    print(f"Multiplication result:{result_mult}")

main()
